let listinha = []
let letra = prompt("Digite a próxima letra:")
listinha.push(letra)
function Lista(){
    while(letra != 0) {}
    return (
        <>
        <ul>
            <p>alfabeto</p>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>...</li>
            <li>{listinha}</li>
        </ul>
        
        </>
    )
}
export default Lista;