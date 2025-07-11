import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

const Thanks = ({ data }) => {

  const reviewReactions = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
  }

  return (
    <>
      <h2>
        Obrigado pelo seu tempo!
      </h2>

      <p>
        Confira abaixo os dados informados e se tudo estiver correto já pode finalizar!
      </p>

      <div className="form-resume">
        <p>
          <b>Nome:</b> {data.fullName}
        </p>

        <p>
          <b>Telefone:</b> {data.phone}
        </p>

        <p>
          <b>E-mail:</b> {data.email ? data.email : 'Não informado'}
        </p>

        <p>
          <b>Endereço:</b> {data.adress}
        </p>

        <p>
          <b>CEP:</b> {data.cep}
        </p>

        <p>
          <b>Avaliação:</b> {reviewReactions[data.review]}
        </p>

        <p>
          <b>Comentário:</b> {data.comment ? data.comment : 'Não informado'}
        </p>

      </div>
    </>
  )
}

export default Thanks