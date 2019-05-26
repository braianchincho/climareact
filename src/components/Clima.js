import React from 'react';
class Clima extends React.Component {
    state = {  }
    mostrarResultado = () => {
        const { name , weather , main } = this.props.response;
        if(!name || !weather || !main) return null;
        const kelvin = 271.15;
        const url_icon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt =`clima de ${name}`;
        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue aling-center">
                        <span className="white-text">
                            <h2>Resultado clima de: {name}</h2>
                            <p className="temperatura">
                                Actual: {(main.temp -kelvin).toFixed(2)}&deg;C
                                <img src={url_icon} alt={alt} />
                            </p>
                            <p>Max. {(main.temp_max - kelvin).toFixed(2)} &deg;C</p>
                            <p>Min. {(main.temp_min - kelvin).toFixed(2)} &deg;C</p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    
    render() { 
        return (<div>{this.mostrarResultado()}</div>);
    }
}
 
export default Clima;