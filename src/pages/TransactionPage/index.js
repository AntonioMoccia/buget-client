import React, { useEffect, useState } from 'react'
import { Table, FloatButton } from 'antd'
import { BsPlusLg } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'

import TransactionColumns from '../../Config/Tables/transaction'

import { setTransactionsData, setModalInsert } from '../../redux/transactions/transactionSlice'
import { getTransaction } from '../../api'
import InsertModal from './components/InsertModal'


function TransactionPage() {

    const transactionData = useSelector(store => store.transactions.transactions)
    const dispatch = useDispatch()
    const [loadingTableData,setLoadingTableData] = useState(false)
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

            <InsertModal />
            <Table
                loading={loadingTableData}
                className="mt-5"
                columns={TransactionColumns}
                dataSource={transactionData}
            />
            <FloatButton
                icon={<BsPlusLg />}
                onClick={() => {
                    dispatch(setModalInsert(true))
                }}
            />
        </>
    )
}

export default TransactionPage