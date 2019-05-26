import React, { Component } from 'react';
import paises from '../Helpers/Paises';
class Formulario extends Component {
    state = { 
        paises : [],
    }
    ciudadRef = React.createRef();
    paisRef = React.createRef();
    componentDidMount(){
     this.setState({paises});
    }
    buscarClima = (e) =>{
        e.preventDefault();
        const request = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        };
        this.props.buscarClima(request);
        e.currentTarget.reset();
    }
    render() { 
        return (  
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit = {this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text" ref = {this.ciudadRef}/>
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un país</option>
                                    {this.state.paises.map( pais => {
                                         return <option value={pais.value} key={pais.value}>{pais.name}</option>;
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
