import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

import './EvaluationForm.css';

const EvaluationForm = ({ data, updateFieldHandler }) => {
  return (
    <>
      <h2>
        Por favor, avalie a nossa plataforma:
      </h2>

      <p>
        A sua opinião é muito importante para oferecermos a melhor experiência para nossos clientes.
        De brinde você receberá um cupom de desconto em seu e-mail após o envio do formulário.
      </p>

      <div className="review-wrapper">
      <label>
        <input type="radio" name="review" value="unsatisfied"
          required checked={data.review === 'unsatisfied' ? true : false} onChange={(e) => {
            updateFieldHandler('review', e.target.value);
          }} />
          <BsFillEmojiFrownFill />
        Insatisfeito
      </label>

      <label>
        <input type="radio" name="review" value="Neutral"
          required checked={data.review === 'Neutral' ? true : false} onChange={(e) => {
            updateFieldHandler('review', e.target.value);
          }} />
          <BsFillEmojiNeutralFill />
        Neutro
      </label>

      <label>
        <input type="radio" name="review" value="satisfied"
          required checked={data.review === 'satisfied' ? true : false} onChange={(e) => {
            updateFieldHandler('review', e.target.value);
          }} />
          <BsFillEmojiSmileFill />
        Satisfeito
      </label>

      <label>
        <input type="radio" name="review" value="very_satisfied"
          required checked={data.review === 'very_satisfied' ? true : false} onChange={(e) => {
            updateFieldHandler('review', e.target.value);
          }} />
          <BsFillEmojiHeartEyesFill />
        Muito satisfeito
      </label>

      </div>

      <label>
        Seu comentário:
        <textarea type="text" name="comment"
           value={data.comment || ''} onChange={(e) => {
            updateFieldHandler('comment', e.target.value);
          }}></textarea>
      </label>
    </>
  )
}

export default EvaluationForm