import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    transactions: [],

    modalInsert: {
        open: false,
        form: {
            type: "",
            category: "",
            date: undefined,
            descrizione: "",
            importo: "",
            payment_method: ""
        }
    },
    table: {
        selectedRow: {
            id: "",
            rowId: "",
            selectedRowData: {}
        },
    },
    modalDelete: {
        open: false
    },
    modalUpdate: {
        open: false,
        selectedRow: {
            id: "",
            rowId: "",
            selectedRowData: {}
        },
        form: {
            type: "",
            category: "",
            date: undefined,
            descrizione: "",
            importo: "",
            payment_method: ""
        }
    }
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: initialState,

    reducers: {
        //pass array of transactions
        setTransactionsData: (store, { payload }) => {
            store.transactions = [...payload]
        },
        //pass name of field and value
        addToForm: (store, { payload }) => {
            let temp = { ...store.modalInsert.form }
            temp[payload.name] = payload.value
            store.modalInsert.form = temp
        },
        addToTransactions: (store, { payload }) => {
            let temp = [...store.transactions]
            temp.push({ ...payload })
            store.transactions = temp
        },
        resetForm: (store, { payload }) => {
            store.modalInsert.form = {}
        },
        //pass true to open modal or false
        setModalInsert: (store, { payload }) => {
            store.modalInsert.open = payload
        },
        setModalUpdate: (store, { payload }) => {
            store.modalUpdate.open = payload
        },
        setSelectedRowUpdate: (store, { payload }) => {
            let temp = { ...payload }
            store.modalUpdate.selectedRow.id = temp.id
            delete temp.id
            store.modalUpdate.selectedRow.selectedRowData = temp
        },
        addToFormUpdate: (store, { payload }) => {
            let temp = { ...store.modalUpdate.selectedRow.selectedRowData }
            temp[payload.name] = payload.value
            store.modalUpdate.selectedRow.selectedRowData = temp
        },
        updateTransactionState: (store, { payload }) => {
            const index = store.transactions.findIndex(row => {
                return row.id == store.modalUpdate.selectedRow.id
            })

            store.transactions[index] = payload
        },
        setSelectedRow: (store, { payload }) => {
            let temp = { ...payload }
            store.table.selectedRow.id = temp.id
            delete temp.id
            store.table.selectedRow.selectedRowData = temp
        },
        setModalDelete: (store, { payload }) => {
            store.modalDelete.open = payload
        },
        deleteFromTransaction: (store, { payload }) => {
            const mapped = store.transactions.filter(row => {
                return row.id !== payload
            })
            store.transactions=mapped
        }
    },
    extraReducers: (builder) => {

    }
})


export default transactionSlice.reducer
export const {
    deleteFromTransaction,
    setModalDelete,
    setSelectedRow,
    setModalUpdate,
    updateTransactionState,
    addToFormUpdate,
    setSelectedRowUpdate,
    setModalInsert, addToForm, resetForm, setTransactionsData, addToTransactions } = transactionSlice.actions