import { Input } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

function AMInputField({ label, type, htmlFor, name, onChange }) {
  const value = useSelector(store => store.transactions.modalInsert.form)[name]
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <Input onChange={onChange} value={value} type={type} id={htmlFor} name={name} />
    </>
  )
}

export default AMInputField