import React, { useEffect, useState } from 'react'
import { Table, FloatButton } from 'antd'
import { BsPlusLg, BsArrow90DegDown } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'

import TransactionColumns from '../../Config/Tables/transaction'

import { setTransactionsData, setModalInsert, setSelectedRow, setSelectedRowUpdate } from '../../redux/transactions/transactionSlice'
import { getTransaction } from '../../api'
import InsertModal from './components/InsertModal'
import { ArrowDownOutlined } from '@ant-design/icons'
import UpdateModal from './components/UpdateModal'
import ContextMenu from './components/ContextMenu'

function TransactionPage() {
    const transactionData = useSelector(store => store.transactions.transactions)
    const dispatch = useDispatch()
    const [loadingTableData, setLoadingTableData] = useState(false)
    //recupero dati al redner della pagina
    useEffect(() => {
        setLoadingTableData(true)
        getTransaction().then(res => {
            dispatch(setTransactionsData(res.data))
            setLoadingTableData(false)
        })
    }, [])
    return (
        <>
            <UpdateModal />
            <InsertModal />
            <Table
                components={{
                    body: {
                        row: (prop) => {
                            console.log(prop);
                            return (
                                <ContextMenu>
                                    <tr {...prop} >
                                            {prop.children}
                                    </tr>
                                </ContextMenu>
                            )
                        }
                    }
                }}
                onRow={(record, rowIndex) => {
                    return {
                        onContextMenu: (event) => {
                            event.preventDefault()
                            dispatch(setSelectedRowUpdate(record))
                            dispatch(setSelectedRow(record))
                            //
                        }
                    }
                }}
                pagination={{
                    pageSize: undefined,
                    position: ['topLeft'],
                }}
                loading={loadingTableData}
                className="mt-5"
                columns={TransactionColumns}
                dataSource={transactionData}
            />
            <FloatButton.Group>

                <FloatButton
                    icon={<BsPlusLg />}
                    onClick={() => {
                        dispatch(setModalInsert(true))
                    }}
                />
                {/*             <FloatButton
                icon={<ArrowDownOutlined />}
                onClick={() => {
                    dispatch(setModalUpdate(true))
                }}
                /> */}
            </FloatButton.Group>
        </>
    )
}

export default TransactionPage