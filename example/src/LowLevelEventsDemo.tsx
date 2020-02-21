import * as React from 'react';
import { PressEventCoordinates, PressHandlingOptions, Space, ViewPort } from 'react-zoomable-ui';

const initViewPort = (vp: ViewPort) => {
  vp.camera.recenter(100, 100, 2);
};

const formatCoordsAsString = (p?: PressEventCoordinates) => {
  return p === undefined
    ? '-'
    : `virtual: ${p.x.toFixed(1)}, ${p.y.toFixed(1)}, client: ${p.clientX.toFixed(1)}, ${p.clientY.toFixed(1)}`;
};

export const LowLevelEventsDemo = () => {
  const r = React.useRef<Space | null>(null);
  const [lastPress, setLastPress] = React.useState();
  const [lastHover, setLastHover] = React.useState();
  const [pressContextMenu, setPressContextMenu] = React.useState();
  const [capturePress, setCapturePress] = React.useState();
  return (
    <Space
      ref={r}
      style={{ backgroundColor: 'black' }}
      onCreate={initViewPort}
      onDecideHowToHandlePress={(element, coords): PressHandlingOptions | undefined => {
        setLastPress(coords);

        // Get id of element or nearest ancestor with an id
        let id;
        let y = element.target as any;
        while (!id && element) {
          id = y.id;
          if (!id) {
            y = y.parentElement;
          }
        }

        if (id === 'prevent_drag') {
          return { ignorePressEntirely: true };
        } else if (id === 'capture_press') {
          return {
            capturePressThresholdMs: 0,
            onCapturePressMove: c => setCapturePress(c),
          };
        }
        return undefined;
      }}
      onHover={(e, c) => setLastHover(c)}
      onPressContextMenu={(e, c) => setPressContextMenu(c)}
    >
      <div
        style={{
          width: 200,
          height: 200,
          left: 0,
          top: 0,
          backgroundColor: '#FFF',
          fontSize: 10,
        }}
      >
        <div>
          Press:
          <br />
          <small>{formatCoordsAsString(lastPress)}</small>
        </div>
        <br />
        <div>
          Hover:
          <br /> <small>{formatCoordsAsString(lastHover)}</small>
        </div>

        <br />
        <div>
          Press Context Menu:
          <br /> <small>{formatCoordsAsString(pressContextMenu)}</small>
        </div>
        <br />
        <div>
          Capture Press:
          <br /> <small>{formatCoordsAsString(capturePress)}</small>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            id="capture_press"
            style={{
              width: 100,
              backgroundColor: 'red',
              padding: 4,
              paddingBottom: 6,
              borderRadius: 2,
              margin: 10,
            }}
          >
            <small>CAPTURE PRESS TEST</small>
          </div>
          <br />
          <div
            id="prevent_drag"
            style={{
              width: 100,
              backgroundColor: 'orange',
              padding: 4,
              paddingBottom: 6,
              borderRadius: 2,
              margin: 10,
            }}
          >
            <small>PREVENT DRAG TEST</small>
          </div>
        </div>
      </div>
    </Space>
  );
};
