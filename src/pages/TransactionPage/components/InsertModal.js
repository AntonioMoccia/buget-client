import React, { useRef } from 'react'
import AMInputField from '../../../components/AMInputField'
import AMModal from '../../../components/Modal'
import { Form, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { addToForm, addToTransactions, setTransactionsData, resetForm, setModalInsert } from '../../../redux/transactions/transactionSlice'
import { addTransaction } from '../../../api'


function InsertModal() {

    const dispatch = useDispatch()
    const formData = useSelector(store => store.transactions.modalInsert.form)
    const openModal = useSelector(store => store.transactions.modalInsert.open)

    const setOpenModal = (value) => {
        dispatch(setModalInsert(value))
    }
    //aggiungo allo store redux
    const handleAddToForm = (name, value) => {
        dispatch(addToForm({ name: name, value: value }))
    }
    //metodo che richiama la funzione per l'aggiunta dei  valori allo store redux
    const handleChangeFormField = (e) => {
        handleAddToForm(e.target.name, e.target.value)
    }
    const handleConfirm = () => {
        console.log(formData);
        addTransaction(formData).then(res => {
            dispatch(addToTransactions(res.data))
            dispatch(resetForm())
            setOpenModal(false)
        })
    }
    const handleCancel = () => {
        dispatch(resetForm())
        setOpenModal(false)
    }
    return (
        <AMModal
            onText={'Save'}
            onOk={handleConfirm}
            onCancel={handleCancel}
            open={openModal}
            setOpen={setOpenModal}
            ModalTitle={'Insert new transaction'}
            ContentModal={
                <>
                    <Form>
                        <Space size={5} direction='vertical' className='w-full'>
                            <AMInputField onChange={handleChangeFormField} type={'text'} label={'Categoria'} htmlFor='category' name={'category'} />
                            <AMInputField onChange={handleChangeFormField} type={'date'} label={'Date'} htmlFor='date' name={'date'} />
                            <AMInputField onChange={handleChangeFormField} type={'text'} label={'Descrizione'} htmlFor='descrizione' name={'descrizione'} />
                            <AMInputField onChange={handleChangeFormField} type={'text'} label={'Importo'} htmlFor='importo' name={'importo'} />
                            <AMInputField onChange={handleChangeFormField} type={'text'} label={'Payment_method'} htmlFor='importo' name={'payment_method'} />
                            <AMInputField onChange={handleChangeFormField} type={'text'} label={'Type'} htmlFor='type' name={'type'} />
                        </Space>
                    </Form>
                </>
            } />
    )
}

export default InsertModal