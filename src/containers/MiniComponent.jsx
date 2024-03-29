// 套件
import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'

// 靜態資源
import '../style/containers/homepage.scss'
import '../style/containers/miniComponent.scss'

// 自定義 components
import Form from '../components/miniComponents/Form'
import Table from '../components/miniComponents/Table'
import {
    TableWithSort,
    TableWithPagination,
    TableWithPaginationSort,
} from '../components/miniComponents/TableHOC'

// 自定義函數 or 參數
import { dummyTableData, dummyTableDataLong } from '../assets/dummyTableData'
import { dummyFormConfig } from '../assets/dummyFormConfig'

function MiniComponentPage() {
    const [formData, updateFormData] = useImmer({})
    const [tableData, updateTableData] = useImmer([])

    useEffect(() => {
        updateTableData(dummyTableData)
    }, [])

    function handleChange(value, Key, datumIndex) {
        updateFormData((draft) => {
            draft[Key] = value
        })
    }

    function handleSubmit() {
        console.log('handleSubmit')
    }

    return (
        <main>
            <section
                style={{
                    position: 'relative',
                    height: '920px',
                }}
            >
                <Form
                    formData={formData}
                    formConfig={dummyFormConfig}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    AppendComponent={function A() {
                        return <div className='formControlGroup'>其他</div>
                    }}
                />
                <hr />

                {/* <Table tableData={tableData} /> */}
                {/* <TableWithSort tableData={tableData} />*/}
                {/* <TableWithPagination tableData={dummyTableDataLong} />  */}
                <TableWithPaginationSort tableData={dummyTableDataLong} />
            </section>
        </main>
    )
}

export default MiniComponentPage
