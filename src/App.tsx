/*

import { Component } from "react" //Componente basado en clases primera parte

class App extends Component{
  render(){
    return(
      <p>
        Hola Mundo
      </p>
    )
  }
}

export default App



import { Component } from "react" //Componente basado en clases segunda parte = state

class App extends Component{
  state = {
    valor: 3
  } //definirlo por un objeto vacio
  render(){
    console.log(this.state); // esto va hacer, que cada vez que nosotros renderizemos nuestro componenten vamos a inpirnmir el estado que tiene
    return(
      <div>
        <button className={`${this.state.valor}`}
        onClick={() => this.setState({valor: 2})}> 
          Enviar
        </button> // aqui se cambia el estado del componente, que tiene la propiedad de valor y el valor que tiene esta propiedad es 2
      </div>
    )
  }
}

export default App


import { Component } from "react" //Componente basado en clases segunda parte = state

class Button extends Component{
  render(){
    console.log('renderizando button');
    return (
      <button>
        SEND
      </button>
    )
  }
}
class App extends Component{
  state = {
    valor: 3
  } //definirlo por un objeto vacio
  render(){
    console.log(this.state); // esto va hacer, que cada vez que nosotros renderizemos nuestro componenten vamos a inpirnmir el estado que tiene
    return(
      <div>
        <p>Atos expo</p>
        <Button />
        <button className={`${this.state.valor}`}
        onClick={() => this.setState({valor: 2})}> 
          Enviar
        </button> // aqui se cambia el estado del componente, que tiene la propiedad de valor y el valor que tiene esta propiedad es 2
      </div>
    )
  }
}

export default App


*/ 

//Montando componentes
//Componente basado en clases segunda parte = state

    import { Component } from "react" 
    
      class Button extends Component {
        
        render(){
          console.log('ejecutando metodo render de button');
          return(
            <button>
              Enviar Peluuu
            </button>
          )
        }
      }

          class App extends Component{
            state = {
              valor: 3
            } //definirlo por un objeto vacio
            render(){
              console.log(this.state); // esto va hacer, que cada vez que nosotros renderizemos nuestro componenten vamos a inpirnmir el estado que tiene
              return(
                <div>
                  <p>Atos expo</p>
                  <Button/>
                  <button className={`${this.state.valor}`}
                  onClick={() => this.setState({valor: 2})}> 
                    Enviar
                  </button> // aqui se cambia el estado del componente, que tiene la propiedad de valor y el valor que tiene esta propiedad es 2
                </div>
              )
            }
          }

          export default App
