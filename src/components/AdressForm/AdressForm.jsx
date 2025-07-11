import React from 'react'

const AdressForm = ({data, updateFieldHandler}) => {
  return (
   <>
    <h2>
      Informe os dados para a entrega
    </h2>

      <label>
        *Seu endereço:
        <input type="text" name="adress"
          required value={data.adress || ''} onChange={(e) => {
            updateFieldHandler('adress', e.target.value);
          }} />
      </label>

      <label>
        *Seu CEP:
        <input type="text" name="cep"
          required value={data.cep || ''} onChange={(e) => {
            updateFieldHandler('cep', e.target.value);
          }} />
      </label>
   </>
  )
}

export default AdressForm