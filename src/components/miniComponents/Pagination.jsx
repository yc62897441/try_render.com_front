// 套件
import React, { useState, useEffect } from 'react'

// 靜態資源
import '../../style/components/pagination.scss'

// 自定義 components
import { Button, Select } from './MiniComponents'

// 自定義函數 or 參數

function PaginationRaw({ propPaginationStates, handleChangePage, handleChangeNumberPerPage }) {
    const [paginationStates, setPaginationStates] = useState({})
    useEffect(() => {
        setPaginationStates(propPaginationStates)
    }, [propPaginationStates])

    return (
        <div className='paginationWrapper'>
            <Button
                name={'第一頁'}
                onClick={() => {
                    handleChangePage(1)
                }}
            />
            <Button
                name={'上一頁'}
                onClick={() => {
                    handleChangePage(Number(paginationStates?.page) - 1)
                }}
            />

            {/* 建立數字頁籤 */}
            {Array.from({ length: paginationStates?.maxPage }, (v, i) => i).map((i, index) => {
                if (
                    paginationStates?.page - 5 <= Number(i + 1) &&
                    Number(i + 1) <= paginationStates?.page + 5
                ) {
                    const isActive = Number(i + 1) === paginationStates?.page ? true : false
                    return (
                        <Button
                            key={index}
                            name={Number(i) + 1}
                            isActive={isActive}
                            onClick={() => {
                                handleChangePage(Number(i) + 1)
                            }}
                        />
                    )
                }
            })}

            <Button
                name={'下一頁'}
                onClick={() => {
                    handleChangePage(Number(paginationStates?.page) + 1)
                }}
            />
            <Button
                name={'最後頁'}
                onClick={() => {
                    handleChangePage(Number(paginationStates?.maxPage))
                }}
            />

            <div className='paginationSelectWrapper'>
                <div>每頁顯示筆數</div>
                <Select
                    selectList={[
                        { label: 10, value: 10 },
                        { label: 25, value: 25 },
                        { label: 50, value: 50 },
                        { label: 100, value: 100 },
                    ]}
                    onChangeFunc={handleChangeNumberPerPage}
                    onChangeKey={'pagination'}
                />
            </div>
        </div>
    )
}

export default PaginationRaw
