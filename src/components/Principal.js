import React ,{Component}from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima';

class Principal extends Component {
    state = { errorForm:false, climaRespuesta:{}}
    buscarClima = (request) => {
       console.log('Buscar')
        const errorForm = !request.ciudad || !request.pais;
        this.setState({errorForm});
        if(!errorForm)
          this.buscarClimaRequest(request);
    }
    buscarClimaRequest= request => {
        const {ciudad,pais} = request;
        const appid = '4a606263653f8bb7edcb187175b95e08';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`
        fetch(url).then(response => response.json())
        .then(response => {
            this.setState({climaRespuesta:response})
        }).catch(error=>{});
    }
    render() { 
        let error = this.state.errorForm,
        mensaje = "";
        const respuesta = this.state.climaRespuesta,
        {cod} = this.state.climaRespuesta;
        if(error){
            mensaje = "Ambos campos son obligatorios"
        }else if(cod){
            if(cod === "404"){
                error = true;
                mensaje = "Ciudad no encontrada";
            }
        }
    
        return (
            <div className="app">
               <Header titulo='Clima React'/>
               <Formulario buscarClima={this.buscarClima}/>
                { error ? <Error mensaje={mensaje}/>:<Clima response={respuesta}/>}
            </div>
          );
    }
}
 
export default Principal;