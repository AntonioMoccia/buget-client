import { Popconfirm } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTransaction } from '../../../api';
import { setModalDelete } from '../../../redux/transactions/transactionSlice'

function ConfirmModalDelete({ children }) {

    const open = useSelector(store => store.transactions.modalDelete.open)
    const deleteId = useSelector(store=>store.transactions.table.selectedRow.id)
    const [confirmLoading, setConfirmLoading] = useState(false);
    const dispatch = useDispatch()
    const setOpen = (value) => {
        dispatch(setModalDelete(value))
    }

    const handleOk = () => {
        setConfirmLoading(true);
        console.log(deleteId);
/*         deleteTransaction(deleteId).then(response=>{
                setConfirmLoading(false)           
        }) */

    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        //setOpen(false);
    };

    return (
        <Popconfirm
            title="Elimina"
            description="Are you sure?"
            open={open}
            onConfirm={handleOk}
            okButtonProps={{
                loading: confirmLoading,
            }}
            onCancel={handleCancel}
        >
            {children}
        </Popconfirm>
    )
}

export default ConfirmModalDelete

