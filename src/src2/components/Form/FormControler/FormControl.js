import React from 'react'
import style from './FormControl.module.css'

const FormControl = ( {name,label,error,...rest} ) => {
  return (
    <div className='form-control'>
      <div >
        <label htmlFor={ name }>{ label }</label>
        <input
          id={ name }
          name={ name }
          {...rest}
          />
        { error && <p className={ style.errormes }>{ error }</p>}
      </ div>
    </div>
  )
}

export default FormControl