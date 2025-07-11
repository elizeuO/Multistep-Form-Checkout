import React from 'react'

const PersonalDataForm = ({data, updateFieldHandler }) => {
  return (
    <>
    <h2>
      Informe seus dados pessoais:
    </h2>

      <label>
        *Seu nome:
        <input type="text" name="fullName"
          required value={data.fullName || ''} onChange={(e) => {
            updateFieldHandler('fullName', e.target.value);
          }} />
      </label>

      <label>
        *Seu telefone:
        <input type="text" name="phone"
          required value={data.phone || ''} onChange={(e) => {
            updateFieldHandler('phone', e.target.value, 'phone');
          }} />
      </label>

      <label>
        Seu e-mail:
        <input type="email" name="email"
          value={data.email || ''} onChange={(e) => {
            updateFieldHandler('email', e.target.value);
          }} />
      </label>
    </>
  )
}

export default PersonalDataForm