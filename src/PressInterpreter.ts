import { ClientPixelUnit, PressEventCoordinates, ViewPortOptions } from './ViewPort';

/**
 * This is the number of client (screen) pixels that a press can move before it
 * is not considered a tap.
 */
const POTENTIAL_TAP_BOUNDS_DEFAULT: ClientPixelUnit = 8;

export type DecidePressHandlingConfigCallback = (
  e: MouseEvent | TouchEvent,
  coordinates: PressEventCoordinates,
) => PressHandlingConfig | undefined;

export interface PressHandlingConfig {
  readonly ignorePressEntirely?: boolean;

  readonly potentialTapBounds?: ClientPixelUnit;
  readonly onPotentialTap?: (coordinates: PressEventCoordinates) => void;
  readonly onTap?: (coordinates: PressEventCoordinates) => void;

  readonly longTapThresholdMs?: number;
  readonly onPotentialLongTap?: (coordinates: PressEventCoordinates) => void;
  readonly onLongTap?: (coordinates: PressEventCoordinates) => void;

  readonly onTapAbandoned?: () => void;

  // readonly capturePressThresholdMs?: number;
  // readonly onCapturePressStart?: (coordinates: PressEventCoordinates) => void;
  // readonly onCapturePressMove?: (coordinates: PressEventCoordinates) => void;
  // readonly onCapturePressEnd?: (coordinates: PressEventCoordinates) => void;
}

export class PressInterpreter {
  public readonly pressHandlers: Pick<ViewPortOptions, 'onPressStart' | 'onPressMove' | 'onPressEnd'>;

  private currentConfig?: PressHandlingConfig;
  private currentPressStartingCoordinates?: PressEventCoordinates;
  private currentPressLongPressThresholdMet?: boolean;
  private longPressTimerId?: any;

  public constructor(private readonly onDecideHowToHandlePress: DecidePressHandlingConfigCallback) {
    this.pressHandlers = {
      onPressStart: this.handlePressStart,
      onPressMove: this.handlePressMove,
      onPressEnd: this.handlePressEnd,
    };
  }

  private handleLongPressThresholdMet = () => {
    this.longPressTimerId = undefined;
    this.currentPressLongPressThresholdMet = true;
  };

  private handlePressStart = (
    e: MouseEvent | TouchEvent,
    coordinates: PressEventCoordinates,
  ): 'CAPTURE' | undefined => {
    if (this.currentConfig) {
      this.reset();
    }
    this.currentConfig = this.onDecideHowToHandlePress(e, coordinates);
    if (this.currentConfig) {
      this.currentPressStartingCoordinates = coordinates;
      this.currentPressLongPressThresholdMet = false;
      if (this.currentConfig.onTap && this.currentConfig.onPotentialTap) {
        this.currentConfig.onPotentialTap(coordinates);
      }
      if (this.currentConfig.longTapThresholdMs !== undefined) {
        this.longPressTimerId = setTimeout(this.handleLongPressThresholdMet, this.currentConfig.longTapThresholdMs);
      }
      return 'CAPTURE';
    }
    return undefined;
  };

  private handlePressMove = (e: MouseEvent | TouchEvent, coordinates: PressEventCoordinates): 'RELEASE' | undefined => {
    if (!this.currentConfig || this.currentConfig.ignorePressEntirely || !this.currentPressStartingCoordinates) {
      return undefined;
    }

    const xDelta = Math.abs(coordinates.clientX - this.currentPressStartingCoordinates.clientX);
    const yDelta = Math.abs(coordinates.clientY - this.currentPressStartingCoordinates.clientY);

    const maxDeltaAllowed = this.currentConfig.potentialTapBounds ?? POTENTIAL_TAP_BOUNDS_DEFAULT;
    if (xDelta > maxDeltaAllowed || yDelta > maxDeltaAllowed) {
      this.currentConfig.onTapAbandoned?.();
      this.reset();
      return 'RELEASE';
    }

    return undefined;
  };

  private handlePressEnd = (e: MouseEvent | TouchEvent, coordinates: PressEventCoordinates) => {
    if (!this.currentConfig || this.currentConfig.ignorePressEntirely) {
      this.reset();
      return;
    }

    if (this.currentPressLongPressThresholdMet) {
      this.currentConfig.onLongTap?.(coordinates);
    } else {
      this.currentConfig.onTap?.(coordinates);
    }

    this.reset();
  };

  private reset = () => {
    this.currentConfig = undefined;
    this.currentPressStartingCoordinates = undefined;
    this.currentPressLongPressThresholdMet = undefined;
    if (this.longPressTimerId) {
      clearTimeout(this.longPressTimerId);
      this.longPressTimerId = undefined;
    }
  };
}
