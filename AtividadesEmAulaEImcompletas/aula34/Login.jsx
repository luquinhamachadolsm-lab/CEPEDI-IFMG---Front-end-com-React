import { useState } from 'react'


function LoginForm() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    function funcaoEvento(e) {
        e.preventDefault()
        console.log("o nome é: ", nome, " o email é: ", email, " e a senha é: ", senha)
    }
    
    return (
        <form>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p>O email é: {email}</p>
            <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <p>O nome é: {nome}</p>
            <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
            <p>a senha é: {senha}</p>
            <button type="submit" onClick={funcaoEvento}>Clique para enviar</button>
        </form>

    );
 }
 export default LoginForm