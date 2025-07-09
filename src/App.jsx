import './App.css'
import Step from './components/Step/Step'

function App() {

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
              <Step text="Dados pessoais"/>
              <Step text="Endereço"/>
              <Step text="Avaliação"/>
              <Step text="Finalização"/>
          </div>

        <form>
          <label>
            *Seu nome: 
            <input type="text" name="name" required/>
          </label>

          <label>
            *Seu telefone:
            <input type="text" name="phone" required/>
          </label>

          <label>
            Seu e-mail:  
            <input type="email" name="email" />
          </label>

        </form>

        </div>

        
      </div>
    </div>
  )
}

export default App
