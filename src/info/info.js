import React from "react"
import css from "./info.module.css"

class Info extends React.Component {
    state = {
        nombre: "Fernando",
        año: 2020
    }

    onChangeNombre = (e) => {
        this.setState({
          nombre : e.target.value,
        })
    }
    onChangeAño = (e) => {
    this.setState({
        año : e.target.value,
    })
    }

    render(){
        if(!this.props.estado){
            return(
                <div>
                    
                    <h4>{this.state.nombre}</h4>
                    <h4>{this.state.año}</h4>
                    <button className={css.btn}  
                        onClick={() => {
                        this.props.info()
                        }}>
                            Editar
                    </button>
                </div>
            )
            
        }
        return(
            <div>    
                <input  type="text" 
                        value={this.state.nombre}
                        className={css.info} 
                        onChange={this.onChangeNombre}
                />
                <input  type="number" 
                        value={this.state.año}
                        className={css.info} 
                        onChange={this.onChangeAño}
                />
                    
                <button className={css.btn}  
                        onClick={() => {this.props.info()}}>
                            Guardar
                </button>
            </div>
        )
    }
}

export default Info