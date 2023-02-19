import {configureStore} from '@reduxjs/toolkit'
import transactionSlice from './transactions/transactionSlice'

export const store = configureStore({
    reducer:{
        transactions:transactionSlice
    }
})
