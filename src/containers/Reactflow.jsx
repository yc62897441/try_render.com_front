// 套件
import React, { useEffect, useCallback } from 'react'
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'

// 靜態資源
import baseSCSS from '../style/base.scss'
const {
    textPrimaryColor,
    mainThemeColor,
    mainThemeColorDark,
    mainThemeColorLight,
    mainThemeColorComplement,
} = baseSCSS
// const textPrimaryColor = '#17202a'
// const mainThemeColor = '#43766c'
// const mainThemeColorDark = '#f8fae5'
// const mainThemeColorLight = '#b19470'
// const mainThemeColorComplement = '#76453b'
import '../style/containers/reactflow.scss'

// 自定義 components

// 自定義函數 or 參數
import { dummyEdges, dummyNodes } from '../assets/reactflowData'

// reactflow 使用，轉換 node 的格式
function formatNodes(rawArray) {
    const tempNodes = []
    let startNodeCount = 0
    let middleNodeCount = 0
    let endNodeCount = 0
    const baseXPosition = 100
    const baseYPosition = 100

    rawArray.forEach((node) => {
        const position = {
            x:
                node.type === 'input'
                    ? baseXPosition + 0
                    : node.type === ''
                      ? baseXPosition + 400
                      : baseXPosition + 800,
            y:
                node.type === 'input'
                    ? baseYPosition + startNodeCount * 150
                    : node.type === ''
                      ? baseYPosition + middleNodeCount * 150
                      : baseYPosition + endNodeCount * 150,
        }
        if (node.type === 'input') startNodeCount++
        if (node.type === '') middleNodeCount++
        if (node.type === 'output') endNodeCount++

        const formattedNode = {
            id: node.id,
            position: position,
            node_desc: node.label,
            data: {
                // label: node.label + ' ' + node.value,
                label: (
                    <>
                        <h1 className='reactFlow-node-title'>{node.label}</h1>
                        <div className='reactFlow-node-content-wrapper'>
                            <div>
                                <span className='reactFlow-node-content-span'>node.value</span>：
                                {node.value}
                            </div>
                        </div>
                    </>
                ),
            },

            // sourcePosition: 'right',
            // targetPosition: 'left',
            sourcePosition: node.TYPE === 'input' ? 'right' : node.TYPE === '' ? 'right' : 'right',
            targetPosition: node.TYPE === 'input' ? 'left' : node.TYPE === '' ? 'left' : 'left',

            style: {
                color: textPrimaryColor,
                background: mainThemeColorDark,
                border: '2px solid',
                borderColor: mainThemeColor,
                fontSize: '16px',
                width: 250,
            },
            connectable: false,
            selectable: false,
        }
        tempNodes.push(formattedNode)
    })

    return tempNodes
}
// reactflow 使用，轉換 edge 的格式
function formatEdges(rawEdges) {
    const tempEdges = []
    rawEdges.forEach((edge) => {
        const formattedEdge = {
            id: edge.id,
            source: edge.source,
            target: edge.target,
            label: edge.label_deac + edge.label_value,
            markerEnd: {
                type: MarkerType.Arrow,
                // type: MarkerType.ArrowClosed,
                color: mainThemeColorComplement,
            },
            style: {
                strokeWidth: 2,
                stroke: mainThemeColorLight,
                // fill: mainThemeColorLight,
                // fontSize: '30px',
            },
            // type: 'straight',
            // type: 'smoothstep',
            // type: 'step',
            // type: 'default',
            animated: true,
        }
        tempEdges.push(formattedEdge)
    })
    return tempEdges
}

function Reactflow() {
    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

    // 初始化，取得 nodes，更新流程圖上的 nodes
    useEffect(() => {
        const tempNodes = formatNodes(dummyNodes)
        setNodes(tempNodes)
    }, [])

    // 初始化，取得 edges，更新流程圖上的 edges
    useEffect(() => {
        const tempEdges = formatEdges(dummyEdges)
        setEdges(tempEdges)
    }, [])

    // 點擊 node，開啟 Modal
    function onNodeClick(event, element) {
        // 透過點擊事件，先找出 node 的主要 wrapper 元件(即 class 含有 "react-flow__node" 的 DOM element)
        let currentDomElement = event.target
        let nodeElement = null
        while (!nodeElement && currentDomElement !== undefined) {
            if (currentDomElement.classList.contains('react-flow__node')) {
                nodeElement = currentDomElement
            } else {
                // 往上層找，直到最上層的 parentElement 為 undefined 為止
                currentDomElement = currentDomElement.parentElement
            }
        }
        // 完全找不到的情況
        if (!nodeElement) return

        // 接著做開啟 Modal 的功能
        console.log('nodeElement', nodeElement)
        console.log('element', element)
    }

    return (
        <div>
            <div className='reactFlowWrapper'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={(event, element) => onNodeClick(event, element)}
                >
                    <Controls />
                    <MiniMap />
                    <Background variant='dots' gap={12} size={1} />
                </ReactFlow>
            </div>
        </div>
    )
}

export default Reactflow
