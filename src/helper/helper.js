// 套件
import React from 'react'
import { MarkerType } from 'reactflow'

// 靜態資源
import baseSCSS from '../style/base.scss'
const {
    textPrimaryColor,
    mainThemeColor,
    mainThemeColorDark,
    mainThemeColorLight,
    mainThemeColorComplement,
} = baseSCSS

// 自定義 components

// 自定義函數 or 參數

// 參考來源：Lazy Loading 延遲載入圖片
// https://mingjun.lu/blog/lazy-loading-images-with-intersection-observer
export function onEnterView(entries, observer) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const img = entry.target
            img.setAttribute('src', img.dataset.src)
            observer.unobserve(img)
        }
    }
}

// reactflow 使用，轉換 node 的格式
export function formatNodes(rawArray) {
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
export function formatEdges(rawEdges) {
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
