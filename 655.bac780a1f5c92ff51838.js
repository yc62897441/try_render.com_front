'use strict'
;(self.webpackChunk = self.webpackChunk || []).push([
    [655],
    {
        pjJJ: (e, t, a) => {
            a.r(t), a.d(t, { default: () => L })
            var o = a('q1tI'),
                l = a('EYfo'),
                n = a('jBnE'),
                r = a('JtmL'),
                c = a('6BB1'),
                s = (a('n1/P'), a('LboF')),
                i = a.n(s),
                m = a('5Hnr'),
                d = a.n(m),
                p = a('shRe'),
                u = a.n(p),
                b = a('3c4z'),
                h = a.n(b),
                f = a('3mzb'),
                g = a.n(f),
                E = a('Hd6Y'),
                C = a.n(E),
                y = a('RRmZ'),
                v = {}
            ;(v.styleTagTransform = C()),
                (v.setAttributes = h()),
                (v.insert = u().bind(null, 'head')),
                (v.domAPI = d()),
                (v.insertStyleElement = g()),
                i()(y.Z, v)
            const w = y.Z && y.Z.locals ? y.Z.locals : void 0
            var T = a('g/if'),
                Z = {}
            ;(Z.styleTagTransform = C()),
                (Z.setAttributes = h()),
                (Z.insert = u().bind(null, 'head')),
                (Z.domAPI = d()),
                (Z.insertStyleElement = g()),
                i()(T.Z, Z),
                T.Z && T.Z.locals && T.Z.locals
            const P = [
                    {
                        id: 'e1',
                        type: 'smoothstep',
                        source: 'a1',
                        target: 'b1',
                        label_deac: 'a1 to b1',
                        label_value: 12404149,
                    },
                    {
                        id: 'e2',
                        type: 'smoothstep',
                        source: 'a2',
                        target: 'b1',
                        label_deac: 'a2 to b1',
                        label_value: 5015671,
                    },
                    {
                        id: 'e3',
                        type: 'smoothstep',
                        source: 'b1',
                        target: 'c1',
                        label_deac: 'b1 to c1',
                        label_value: 17419820,
                    },
                ],
                k = [
                    { id: 'a1', type: 'input', label: 'a1', value: 12404149 },
                    { id: 'a2', type: 'input', label: 'a2', value: 5015671 },
                    { id: 'b1', type: '', label: 'b1', value: 17419820 },
                    { id: 'c1', type: 'output', label: 'c1', value: 17419820 },
                ],
                {
                    textPrimaryColor: _,
                    mainThemeColor: x,
                    mainThemeColorDark: F,
                    mainThemeColorLight: J,
                    mainThemeColorComplement: A,
                } = w,
                L = function () {
                    const [e, t, a] = (0, l.Rr)([]),
                        [s, i, m] = (0, l.ll)([]),
                        d = (0, o.useCallback)((e) => i((t) => (0, l.Z_)(e, t)), [i])
                    return (
                        (0, o.useEffect)(() => {
                            const e = (function (e) {
                                const t = []
                                let a = 0,
                                    l = 0,
                                    n = 0
                                return (
                                    e.forEach((e) => {
                                        const r = {
                                            x: 'input' === e.type ? 100 : '' === e.type ? 500 : 900,
                                            y:
                                                'input' === e.type
                                                    ? 100 + 150 * a
                                                    : '' === e.type
                                                      ? 100 + 150 * l
                                                      : 100 + 150 * n,
                                        }
                                        'input' === e.type && a++,
                                            '' === e.type && l++,
                                            'output' === e.type && n++
                                        const c = {
                                            id: e.id,
                                            position: r,
                                            node_desc: e.label,
                                            data: {
                                                label: o.createElement(
                                                    o.Fragment,
                                                    null,
                                                    o.createElement(
                                                        'h1',
                                                        { className: 'reactFlow-node-title' },
                                                        e.label
                                                    ),
                                                    o.createElement(
                                                        'div',
                                                        {
                                                            className:
                                                                'reactFlow-node-content-wrapper',
                                                        },
                                                        o.createElement(
                                                            'div',
                                                            null,
                                                            o.createElement(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'reactFlow-node-content-span',
                                                                },
                                                                'node.value'
                                                            ),
                                                            '：',
                                                            e.value
                                                        )
                                                    )
                                                ),
                                            },
                                            sourcePosition: ('input' === e.TYPE || e.TYPE, 'right'),
                                            targetPosition: ('input' === e.TYPE || e.TYPE, 'left'),
                                            style: {
                                                color: _,
                                                background: F,
                                                border: '2px solid',
                                                borderColor: x,
                                                fontSize: '16px',
                                                width: 250,
                                            },
                                            connectable: !1,
                                            selectable: !1,
                                        }
                                        t.push(c)
                                    }),
                                    t
                                )
                            })(k)
                            t(e)
                        }, []),
                        (0, o.useEffect)(() => {
                            const e = (function (e) {
                                const t = []
                                return (
                                    e.forEach((e) => {
                                        const a = {
                                            id: e.id,
                                            source: e.source,
                                            target: e.target,
                                            label: e.label_deac + e.label_value,
                                            markerEnd: { type: l.QZ.Arrow, color: A },
                                            style: { strokeWidth: 2, stroke: J },
                                            animated: !0,
                                        }
                                        t.push(a)
                                    }),
                                    t
                                )
                            })(P)
                            i(e)
                        }, []),
                        o.createElement(
                            'div',
                            null,
                            o.createElement(
                                'div',
                                { className: 'reactFlowWrapper' },
                                o.createElement(
                                    l.x$,
                                    {
                                        nodes: e,
                                        edges: s,
                                        onNodesChange: a,
                                        onEdgesChange: m,
                                        onConnect: d,
                                        onNodeClick: (e, t) =>
                                            (function (e, t) {
                                                let a = e.target,
                                                    o = null
                                                for (; !o && void 0 !== a; )
                                                    a.classList.contains('react-flow__node')
                                                        ? (o = a)
                                                        : (a = a.parentElement)
                                                o &&
                                                    (console.log('nodeElement', o),
                                                    console.log('element', t))
                                            })(e, t),
                                    },
                                    o.createElement(n.Z, null),
                                    o.createElement(r.a, null),
                                    o.createElement(c.A, { variant: 'dots', gap: 12, size: 1 })
                                )
                            )
                        )
                    )
                }
        },
        RRmZ: (e, t, a) => {
            a.d(t, { Z: () => c })
            var o = a('J8ja'),
                l = a.n(o),
                n = a('JPst'),
                r = a.n(n)()(l())
            r.push([e.id, '', '']),
                (r.locals = {
                    textPrimaryColor: '#17202a',
                    mainThemeColor: '#43766c',
                    mainThemeColorDark: '#f8fae5',
                    mainThemeColorLight: '#b19470',
                    mainThemeColorComplement: '#76453b',
                })
            const c = r
        },
        'g/if': (e, t, a) => {
            a.d(t, { Z: () => c })
            var o = a('J8ja'),
                l = a.n(o),
                n = a('JPst'),
                r = a.n(n)()(l())
            r.push([
                e.id,
                '.reactFlowWrapper{width:100%;height:calc(100vh - 100px);border:2px dashed #000;border-color:#aaa}.reactFlow-node-title{color:#17202a;font-size:1.2rem;font-weight:500}.reactFlow-node-content-wrapper{margin:5px 0}.reactFlow-node-content-wrapper>div{margin:5px 0}.reactFlow-node-content-span{font-weight:500}',
                '',
            ]),
                (r.locals = {
                    textPrimaryColor: '#17202a',
                    mainThemeColor: '#43766c',
                    mainThemeColorDark: '#f8fae5',
                    mainThemeColorLight: '#b19470',
                    mainThemeColorComplement: '#76453b',
                })
            const c = r
        },
    },
])
