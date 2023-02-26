import { postData, getData, putData, deleteData } from '../utils'


class Transaction {
    constructor({host = 'localhost', port = 5000}) {
        this.host = host
        this.port = port
    }

    getTransactions() {
        return getData(`http://${this.host}:${this.port}/transactions`)
    }
    addTransaction(data){
        /**
        "type":"uscita",
        "category":"dentista",
        "descrizione":"pagamaneot parziale dentista", 
        "importo":600,
        "payment_method":"Bancomat"
         */
        return postData('http://localhost:5000/transactions', data)
    
    }
    updateTransaction(id, data){
        /**
        "type":"uscita",
        "category":"dentista",
        "descrizione":"pagamaneot parziale dentista", 
        "importo":600,
        "payment_method":"Bancomat"
         */
        return putData(`http://localhost:5000/transactions/${id}`, data)
    
    }
    deleteTransaction(id){
        return deleteData(`http://localhost:5000/transactions/${id}`)
    }
}
export default Transaction