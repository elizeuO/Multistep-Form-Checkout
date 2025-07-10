import { useState } from 'react'

export function useForm(formSteps){
    const [currentStep, setCurrentStep] = useState(0)

    return {
                currentStep,
                currentComponent: formSteps[currentStep],
                isFirstStep: currentStep === 0 ? true : false,
                isLastStep: currentStep + 1 === formSteps.length ? true: false,
            }
}