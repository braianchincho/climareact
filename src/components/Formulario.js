import React, { Component } from 'react';
import paises from '../Helpers/Paises';
class Formulario extends Component {
    state = { paises : []}
    componentDidMount(){
     this.setState({paises});
    }
    render() { 
        return (  
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text"/>
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select>
                                    <option value="" defaultValue>Elige un país</option>
                                    {this.state.paises.map( pais => {
                                         return <option value={pais.value}>{pais.name}</option>;
                                    })}
                                </select>
                                <label htmlFor="pais">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="buscar" type="submit" className="waves-effect waves-ligth btn-large yellow accent-4" value="Buscar..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Formulario;
