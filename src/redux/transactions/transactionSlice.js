import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    transactions:[],
    form:{},
    modalInsert:{
        open:false
    }
}

const transactionSlice = createSlice({
    name:'transaction',
    initialState:initialState,
    
    reducers:{
        //pass array of transactions
        setTransactionsData:(store,{payload})=>{
            store.transactions = [...payload]
        },
        //pass name of field and value
        addToForm:(store,{payload})=>{
            let temp = {...store.form}
            temp[payload.name]= payload.value
            store.form=temp
        },
        addToTransactions:(store,{payload})=>{
            let temp = [...store.transactions]
            temp.push({...payload})
            store.transactions=temp
        },
        resetForm:(store,{payload})=>{
            store.form = {}
        },
        //pass true to open modal or false
        setModalInsert:(store,{payload})=>{
            store.modalInsert.open=payload
        }
    },  
    extraReducers:(builder)=>{
        
    }
})


export default transactionSlice.reducer
export const {setModalInsert,addToForm,resetForm,setTransactionsData,addToTransactions} = transactionSlice.actions