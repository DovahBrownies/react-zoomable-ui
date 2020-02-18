[react-zoomable-ui](../README.md) › [Globals](../globals.md) › [NoPanArea](nopanarea.md)

# Class: NoPanArea <**S, SS**>

If you have a part of your `Space` that you do not want to be pan-able for
some reason you can wrap it with `NoPanArea`. This has limited utility, but
might be useful in some cases.

This doesn't affect zooming though.

Must only be used inside a [Space](space.md).

## Props

See [NoPanAreaProps](../interfaces/nopanareaprops.md).

## Type parameters

▪ **S**

▪ **SS**

## Hierarchy

- PureComponent‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›

  ↳ **NoPanArea**

## Index

### Constructors

- [constructor](nopanarea.md#constructor)

### Properties

- [constantStyles](nopanarea.md#private-constantstyles)
- [context](nopanarea.md#context)
- [divRef](nopanarea.md#private-divref)
- [id](nopanarea.md#id)
- [uniqueClassName](nopanarea.md#private-uniqueclassname)
- [contextType](nopanarea.md#static-contexttype)

### Methods

- [UNSAFE_componentWillMount](nopanarea.md#optional-unsafe_componentwillmount)
- [UNSAFE_componentWillReceiveProps](nopanarea.md#optional-unsafe_componentwillreceiveprops)
- [UNSAFE_componentWillUpdate](nopanarea.md#optional-unsafe_componentwillupdate)
- [componentDidCatch](nopanarea.md#optional-componentdidcatch)
- [componentDidMount](nopanarea.md#componentdidmount)
- [componentDidUpdate](nopanarea.md#optional-componentdidupdate)
- [componentWillMount](nopanarea.md#optional-componentwillmount)
- [componentWillReceiveProps](nopanarea.md#optional-componentwillreceiveprops)
- [componentWillUnmount](nopanarea.md#componentwillunmount)
- [componentWillUpdate](nopanarea.md#optional-componentwillupdate)
- [determineClassName](nopanarea.md#private-determineclassname)
- [getSnapshotBeforeUpdate](nopanarea.md#optional-getsnapshotbeforeupdate)
- [render](nopanarea.md#render)
- [shouldComponentUpdate](nopanarea.md#optional-shouldcomponentupdate)

## Constructors

### constructor

\+ **new NoPanArea**(`props`: [NoPanAreaProps](../interfaces/nopanareaprops.md), `context`: [SpaceContextType](../interfaces/spacecontexttype.md)): _[NoPanArea](nopanarea.md)_

_Defined in [src/NoPanArea.tsx:33](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L33)_

**Parameters:**

| Name      | Type                                                  |
| --------- | ----------------------------------------------------- |
| `props`   | [NoPanAreaProps](../interfaces/nopanareaprops.md)     |
| `context` | [SpaceContextType](../interfaces/spacecontexttype.md) |

**Returns:** _[NoPanArea](nopanarea.md)_

## Properties

### `Private` constantStyles

• **constantStyles**: _string_

_Defined in [src/NoPanArea.tsx:31](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L31)_

---

### context

• **context**: _[SpaceContextType](../interfaces/spacecontexttype.md)_

_Defined in [src/NoPanArea.tsx:28](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L28)_

---

### `Private` divRef

• **divRef**: _RefObject‹HTMLDivElement›_ = React.createRef()

_Defined in [src/NoPanArea.tsx:32](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L32)_

---

### id

• **id**: _string_ = generateRandomId()

_Defined in [src/NoPanArea.tsx:29](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L29)_

---

### `Private` uniqueClassName

• **uniqueClassName**: _string_ = `react-zoomable-ui-no-pan-area-${this.id}`

_Defined in [src/NoPanArea.tsx:33](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L33)_

---

### `Static` contextType

▪ **contextType**: _Context‹[SpaceContextType](../interfaces/spacecontexttype.md)›_ = SpaceContext

_Defined in [src/NoPanArea.tsx:27](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L27)_

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): _void_

_Inherited from [NoPanArea](nopanarea.md).[UNSAFE_componentWillMount](nopanarea.md#optional-unsafe_componentwillmount)_

Defined in node_modules/@types/react/index.d.ts:658

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** _void_

---

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›, `nextContext`: any): _void_

_Inherited from [NoPanArea](nopanarea.md).[UNSAFE_componentWillReceiveProps](nopanarea.md#optional-unsafe_componentwillreceiveprops)_

Defined in node_modules/@types/react/index.d.ts:690

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| `nextProps`   | Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)› |
| `nextContext` | any                                                         |

**Returns:** _void_

---

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): _void_

_Inherited from [NoPanArea](nopanarea.md).[UNSAFE_componentWillUpdate](nopanarea.md#optional-unsafe_componentwillupdate)_

Defined in node_modules/@types/react/index.d.ts:718

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| `nextProps`   | Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)› |
| `nextState`   | Readonly‹S›                                                 |
| `nextContext` | any                                                         |

**Returns:** _void_

---

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): _void_

_Inherited from [NoPanArea](nopanarea.md).[componentDidCatch](nopanarea.md#optional-componentdidcatch)_

Defined in node_modules/@types/react/index.d.ts:587

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

| Name        | Type      |
| ----------- | --------- |
| `error`     | Error     |
| `errorInfo` | ErrorInfo |

**Returns:** _void_

---

### componentDidMount

▸ **componentDidMount**(): _void_

_Overrides [Space](space.md).[componentDidMount](space.md#optional-componentdidmount)_

_Defined in [src/NoPanArea.tsx:48](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L48)_

**Returns:** _void_

---

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›, `prevState`: Readonly‹S›, `snapshot?`: SS): _void_

_Inherited from [NoPanArea](nopanarea.md).[componentDidUpdate](nopanarea.md#optional-componentdidupdate)_

Defined in node_modules/@types/react/index.d.ts:629

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name        | Type                                                        |
| ----------- | ----------------------------------------------------------- |
| `prevProps` | Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)› |
| `prevState` | Readonly‹S›                                                 |
| `snapshot?` | SS                                                          |

**Returns:** _void_

---

### `Optional` componentWillMount

▸ **componentWillMount**(): _void_

_Inherited from [NoPanArea](nopanarea.md).[componentWillMount](nopanarea.md#optional-componentwillmount)_

Defined in node_modules/@types/react/index.d.ts:644

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** _void_

---

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›, `nextContext`: any): _void_

_Inherited from [NoPanArea](nopanarea.md).[componentWillReceiveProps](nopanarea.md#optional-componentwillreceiveprops)_

Defined in node_modules/@types/react/index.d.ts:673

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| `nextProps`   | Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)› |
| `nextContext` | any                                                         |

**Returns:** _void_

---

### componentWillUnmount

▸ **componentWillUnmount**(): _void_

_Overrides void_

_Defined in [src/NoPanArea.tsx:52](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L52)_

**Returns:** _void_

---

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): _void_

_Inherited from [NoPanArea](nopanarea.md).[componentWillUpdate](nopanarea.md#optional-componentwillupdate)_

Defined in node_modules/@types/react/index.d.ts:703

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| `nextProps`   | Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)› |
| `nextState`   | Readonly‹S›                                                 |
| `nextContext` | any                                                         |

**Returns:** _void_

---

### `Private` determineClassName

▸ **determineClassName**(): _string_

_Defined in [src/NoPanArea.tsx:74](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L74)_

**Returns:** _string_

---

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›, `prevState`: Readonly‹S›): _SS | null_

_Inherited from [NoPanArea](nopanarea.md).[getSnapshotBeforeUpdate](nopanarea.md#optional-getsnapshotbeforeupdate)_

Defined in node_modules/@types/react/index.d.ts:623

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

| Name        | Type                                                        |
| ----------- | ----------------------------------------------------------- |
| `prevProps` | Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)› |
| `prevState` | Readonly‹S›                                                 |

**Returns:** _SS | null_

---

### render

▸ **render**(): _Element‹›_

_Defined in [src/NoPanArea.tsx:56](https://github.com/aarondail/react-zoomable-ui/blob/d41a716/src/NoPanArea.tsx#L56)_

**Returns:** _Element‹›_

---

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): _boolean_

_Inherited from [NoPanArea](nopanarea.md).[shouldComponentUpdate](nopanarea.md#optional-shouldcomponentupdate)_

Defined in node_modules/@types/react/index.d.ts:577

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

| Name          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| `nextProps`   | Readonly‹[NoPanAreaProps](../interfaces/nopanareaprops.md)› |
| `nextState`   | Readonly‹S›                                                 |
| `nextContext` | any                                                         |

**Returns:** _boolean_