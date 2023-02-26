import { postData, getData, putData, deleteData } from './utils'

export const getTransaction = () => {
    return getData('http://localhost:5000/transactions')
}

export const addTransaction = (data) => {
    /**
    "type":"uscita",
    "category":"dentista",
    "descrizione":"pagamaneot parziale dentista", 
    "importo":600,
    "payment_method":"Bancomat"
     */
    return postData('http://localhost:5000/transactions', data)

}
export const updateTransaction = (id, data) => {
    /**
    "type":"uscita",
    "category":"dentista",
    "descrizione":"pagamaneot parziale dentista", 
    "importo":600,
    "payment_method":"Bancomat"
     */
    return putData(`http://localhost:5000/transactions/${id}`, data)

}
export const deleteTransaction = (id) => {
    return deleteData(`http://localhost:5000/transactions/${id}`)
}