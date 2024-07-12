export const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email })

  }

  return <form onSubmit={safeSubmit} className='h-full flex flex-col items-center justify-center -mt-20 mx-5 gap-10'>
    <input className='alura-input' type='text' required placeholder='Insira seu nome aqui...' />
    <input className='alura-input' type='email' required placeholder='Insira seu e-mail aqui...' />
    <button className="alura-button"
      type='submit'>
      Seguir
    </button>

  </form>

}