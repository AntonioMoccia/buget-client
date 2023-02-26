import React, { Children, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Space } from 'antd'
import { deleteFromTransaction, setModalUpdate } from '../../../redux/transactions/transactionSlice'
import { deleteTransaction } from '../../../api'
import { MdDeleteForever,MdEdit } from 'react-icons/md'
function ContextMenu({ event, children }) {

  //  const { x, y } = useSelector(store => store.transactions.contextMenu.position)
  const dispatch = useDispatch()
  const deleteId = useSelector(store => store.transactions.table.selectedRow.id)

  const items = [
    {
      label: 'Update',
      key: 'update',
      icon: <MdEdit className=' text-black' size={15}/>,
      onClick: () => {
        dispatch(setModalUpdate(true))
      }
    },
    {
      label: "Delete",
      key: 'delete',
      icon: <MdDeleteForever className=' text-black' size={15}/>,
      onClick: () => {
        deleteTransaction(deleteId).then(res => {
          dispatch(deleteFromTransaction(deleteId))
        })
      }
    },
  ]
  return (

    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      {children}
    </Dropdown>
  )
}

export default ContextMenu