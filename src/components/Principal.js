import React ,{Component}from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';

class Principal extends Component {
    state = { errorForm:false, climaRespuesta:{}}
    buscarClima = (request) => {
       
        const errorForm = !request.ciudad || !request.pais;
        this.setState({errorForm});
        if(!errorForm)
          this.buscarClimaRequest(request);
    }
    buscarClimaRequest= request => {
        debugger
        const {ciudad,pais} = request;
        const appid = '4a606263653f8bb7edcb187175b95e08';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`
        fetch(url).then(response => response.json())
        .then(response => {
            this.setState({climaRespuesta:response})
        }).catch();
        console.log(url);
    }
    render() { 
        const error = this.state.errorForm,
        mensaje = "Ambos campos son requeridos";
        return (
            <div className="app">
               <Header titulo='Clima React'/>
               <Formulario buscarClima={this.buscarClima}/>
                { error ? <Error mensaje={mensaje}/>:''}
            </div>
          );
    }
}
 
export default Principal;