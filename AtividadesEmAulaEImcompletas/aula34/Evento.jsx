function Evento() {
    function funcaoEvento() {
        console.log("clicou")
    }

    return(
        <div>
            <p>ESTE BOTÃO NÃO FAZ NADA</p>
            <button onClick={funcaoEvento}>BOTÃO</button>
        </div>
    )
}
export default Evento