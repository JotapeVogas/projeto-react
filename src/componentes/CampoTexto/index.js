import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto


// const usuarios = [
//         {nome: 'ana', sobrenome: 'silva'},
//         {nome: 'bia', sobrenome: 'santos'},
//         {nome: 'carlos', sobrenome: 'oliveira'}
//     ]

// usuarios.map((usuario) => console.log(usuario))
// const novosUsuarios = usuarios.map((usuario) => {
//     return {
//         nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`
//     }
// })

// novosUsuarios.map((usuario) =>  )

// console.log(novosUsuarios)


