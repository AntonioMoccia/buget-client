import React, { Children, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Space } from 'antd'
import {setModalUpdate} from '../../../redux/transactions/transactionSlice'
function ContextMenu({ event, children }) {

//  const { x, y } = useSelector(store => store.transactions.contextMenu.position)
  const dispatch = useDispatch()

  
  const items = [
    {
      label: 'Update row',
      key: '1',
      onClick:()=>{
        dispatch(setModalUpdate(true))
      }
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ]
  return (

    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      {children}
    </Dropdown>
  )
}

export default ContextMenu