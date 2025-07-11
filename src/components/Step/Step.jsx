import './Step.css';

const Step = ({text, stepId, currentStep, changeStep, icon, hideFormMessage}) => {
  const convertedStepId = parseInt(stepId);

  return (
      <div className={`step-item ${convertedStepId === currentStep ? 'active' : ''}`}>
        
    <button onClick={(e)=>{
      hideFormMessage();
      changeStep(convertedStepId);
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