import Transactions from './transactions/transactions'
class Api {
    constructor({ host = 'localhost', port = 5000 }) {
        this.host = host
        this.port = port
        this.initEndPoints()
    }
    initEndPoints(){
        this.transactions()
    }
    transactions() {
        this.transaction = new Transactions({ host: this.host, port: this.port })
    }

}
export default Api