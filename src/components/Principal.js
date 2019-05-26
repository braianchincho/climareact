import React ,{Component}from 'react';
import Header from './Header';
import Formulario from './Formulario';

class Principal extends Component {
    state = {  }
    render() { 
        return (
            <div className="app">
               <Header titulo='Clima React'/>
               <Formulario/>
            </div>
          );
    }
}
 
export default Principal;