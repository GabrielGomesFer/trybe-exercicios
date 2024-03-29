import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component{
    render() {
        return(
            <div>
                {conteudos.map((cont) => (
                    <div>
                    <p> {`O conteúdo é: ${cont.conteudo}`} </p>
                    <p> {`Status ${cont.status}`} </p>
                    <p> {`Bloco: ${cont.bloco}`} </p>
                    <br></br>
                    </div>
                ))}
            </div>
        )
    }
}

export default Content