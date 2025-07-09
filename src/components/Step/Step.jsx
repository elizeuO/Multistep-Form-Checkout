import { FaRegUser } from "react-icons/fa6";

import './Step.css';

const Step = ({text}) => {
  return (
    <div className="step-item active">
        
    <button>
        <FaRegUser />
        <span>
        {text}
        </span>
    </button>

    </div>
  )
}

export default Step