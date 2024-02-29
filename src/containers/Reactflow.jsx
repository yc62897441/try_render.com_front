// 套件
import React, { useEffect, useCallback } from 'react'
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    // MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'

// 靜態資源
import '../style/containers/reactflow.scss'

// 自定義 components

// 自定義函數 or 參數
import { dummyEdges, dummyNodes } from '../assets/reactflowData'
import { formatNodes, formatEdges } from '../helper/helper'

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
