import { useRef } from 'react'
import api from '../../services/api'
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {

    const nome = useRef()
    const email = useRef()
    const senha = useRef()

    function enviarDados(event){
        event.preventDefault()
        api.post("/contatos/",{
            nome: nome.current.value,
            email: email.current.value,
            senha: senha.current.value,
        }).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
    }

  return (
    <>
       <main class="vh-100 ">
       <form className="col-8 container" onSubmit={enviarDados}>        
            <h1 class="display-3 mt-4">Cadastrar Cliente</h1>
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Nome</span>
                <input required type="text" className="form-control" ref={nome} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Email</span>
                <input required type="text" className="form-control" ref={email} placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Senha</span>
                <input required type="text" className="form-control" ref={senha} placeholder="Senha" aria-label="Senha" aria-describedby="addon-wrapping" />
            </div>
            
            <div className="col s12">
                            <button className="waves-light btn" type="submit">Enviar</button>
                        </div>
            </form>

    </main>
    </>
  );
}
export default Formulario;