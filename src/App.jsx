//Components
import PersonalDataForm from './components/PersonalDataForm/PersonalDataForm';
import AdressForm from './components/AdressForm/AdressForm';
import EvaluationForm from './components/EvaluationForm/EvaluationForm';
import Thanks from './components/Thanks/Thanks';
import Step from './components/Step/Step'

//Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

import './App.css'

const formData = {
  name: '',
  phone: '',
  email: '',
  adress: '',
  cep: '',
  review: '',
  comment: '',
}

function App() {
  const [data, setData] = useState({formData});

  const updateFieldHandler = (key, value) => {
    setData((prev)=>{
      return{...prev, [key]:value};
    });
  }

  const formComponents = [
    <PersonalDataForm data={data} updateFieldHandler={updateFieldHandler} />,
    <AdressForm data={data} updateFieldHandler={updateFieldHandler} />,
    <EvaluationForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks />
  ];

  const {currentStep, currentComponent, isFirstStep, isLastStep} = useForm(formComponents);

  return (
    <div className="app">
      <div className="container">
        <h1>
          Finalização do pedido
        </h1>

        <p>
          Preencha nosso formulário para a conclusão da sua compra.
        </p>

        <div className="form-container">

          <div className="steps">
            <Step text="Dados pessoais" />
            <Step text="Endereço" />
            <Step text="Avaliação" />
            <Step text="Finalização" />
          </div>

          <form>

            {currentComponent}

            <div className="action-container">
              <button type='button'>
                Anterior
              </button>

              <button type='submit'>
                Próximo
              </button>
            </div>

          </form>

        </div>


      </div>
    </div>
  )
}

export default App
