import { useState } from 'react'

export function useForm(formSteps){
    const [currentStep, setCurrentStep] = useState(0);

    const changeStep = (value, e)=>{
        if (e) e.preventDefault();

        if(value < 0 || value >= formSteps.length) return;

        setCurrentStep(value);
    }

    return {
                currentStep,
                currentComponent: formSteps[currentStep],
                changeStep,
                isFirstStep: currentStep === 0 ? true : false,
                isLastStep: currentStep + 1 === formSteps.length ? true: false,
            }
}