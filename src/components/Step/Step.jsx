import './Step.css';

const Step = ({text, stepId, currentStep, changeStep, icon}) => {
  const convertedStepId = parseInt(stepId);

  return (
      <div className={`step-item ${convertedStepId === currentStep ? 'active' : ''}`}>
        
    <button onClick={(e)=>{
      changeStep(convertedStepId)
    }}>
        {icon}
        <span>
        {text}
        </span>
    </button>

    </div>
  )
}

export default Step