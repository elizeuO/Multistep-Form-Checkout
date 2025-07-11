import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi';
import { FaRegUser } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

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
  const [data, setData] = useState({ formData });

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  const formComponents = [
    <PersonalDataForm data={data} updateFieldHandler={updateFieldHandler} />,
    <AdressForm data={data} updateFieldHandler={updateFieldHandler} />,
    <EvaluationForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents);

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
            <Step stepId='0' text="Dados pessoais" icon={<FaRegUser />}
              currentStep={currentStep} changeStep={changeStep} />

            <Step stepId='1' text="Endereço" icon={<FaMapMarkerAlt />}
              currentStep={currentStep} changeStep={changeStep} />

            <Step stepId='2' text="Avaliação" icon={<FaRegThumbsUp />}
              currentStep={currentStep} changeStep={changeStep} />

            <Step stepId='3' text="Finalização" icon={<FaRegEnvelope />}
              currentStep={currentStep} changeStep={changeStep} />
          </div>

          <form onSubmit={(e => {
            changeStep(currentStep + 1, e)
          })}>

            {currentComponent}

            <div className="action-container">
              {
                !isFirstStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious />
                  Anterior
                </button>
                )}
              {
                !isLastStep ? (<button type='submit'>
                  Próximo
                  <GrFormNext />
                </button>
                ) : (<button type='submit'>
                  <FiSend />
                Enviar
              </button>
              )}

            </div>
          </form>

        </div>


      </div>
    </div>
  )
}

export default App
