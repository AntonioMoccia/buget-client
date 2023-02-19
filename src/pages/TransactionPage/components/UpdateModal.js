import React, { useRef } from 'react'
import AMInputField from '../../../components/AMInputField'
import AMModal from '../../../components/Modal'
import { Form, Space,Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { addToFormUpdate, updateTransactionState,  resetForm, setModalUpdate } from '../../../redux/transactions/transactionSlice'
import { updateTransaction } from '../../../api'
function UpdateModal() {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const formData = useSelector(store => store.transactions.modalUpdate.selectedRow.selectedRowData)
    const openModal = useSelector(store => store.transactions.modalUpdate.open)
    const id = useSelector(store => store.transactions.modalUpdate.selectedRow.id)

    const setOpenModal = (value) => {
        dispatch(setModalUpdate(value))
    }
    //aggiungo allo store redux
    const handleAddToFormUpdate = (name, value) => {
        console.log(name,value);
        dispatch(addToFormUpdate({ name: name, value: value }))
    }
    //metodo che richiama la funzione per l'aggiunta dei  valori allo store redux
    const handleChangeFormField = (e) => {
        handleAddToFormUpdate(e.target.name, e.target.value)
    }
    const handleConfirm = () => {
        console.log(formData);
        updateTransaction(id,formData).then(res => {
                console.log(res);
            dispatch(updateTransactionState(res.data))
           // dispatch(resetForm())
        
           setOpenModal(false)
        })
    }
    const handleCancel = () => {
        dispatch(resetForm())
        setOpenModal(false)
    }
    return (
        <AMModal
        onText={'Update'}
            onOk={handleConfirm}
            onCancel={handleCancel}
            open={openModal}
            setOpen={setOpenModal}
            ModalTitle={'Update transaction'}
            ContentModal={
                <>
                    <Form form={form}>
                        <Space size={5} direction='vertical' className='w-full'>
                            <InputUpdateField onChange={handleChangeFormField} type={'text'} label={'Categoria'} htmlFor='category' name={'category'} />
                            <InputUpdateField onChange={handleChangeFormField} type={'date'} label={'Date'} htmlFor='date' name={'date'} />
                            <InputUpdateField onChange={handleChangeFormField} type={'text'} label={'Descrizione'} htmlFor='descrizione' name={'descrizione'} />
                            <InputUpdateField onChange={handleChangeFormField} type={'text'} label={'Importo'} htmlFor='importo' name={'importo'} />
                            <InputUpdateField onChange={handleChangeFormField} type={'text'} label={'Payment_method'} htmlFor='importo' name={'payment_method'} />
                            <InputUpdateField onChange={handleChangeFormField} type={'text'} label={'Type'} htmlFor='type' name={'type'} />
                        </Space>
                    </Form>
                </>
            } />
    )
}
const InputUpdateField = ({ label, type, htmlFor, name, onChange })=>{
    const value = useSelector(store => store.transactions.modalUpdate.selectedRow.selectedRowData)[name]
    return (
      <>
        <label htmlFor={htmlFor}>{label}</label>
        <Input onChange={onChange} value={value} type={type} id={htmlFor} name={name} />
      </>
    )
}

export default UpdateModal