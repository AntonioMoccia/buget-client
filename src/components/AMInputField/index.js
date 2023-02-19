import { Input } from 'antd'
import React from 'react'

function AMInputField({label,type,htmlFor, name,onChange}) {
  
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <Input onChange={onChange} type={type} id={htmlFor} name={name}/>
    </>
  )
}

export default AMInputField