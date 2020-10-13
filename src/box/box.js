import React from 'react'
import css from './box.module.css'



class Box extends React.Component {
    state = {
        creado: new Date().toLocaleString(),
        actualizado: new Date().toLocaleString()
    }
    actualizar = () => {
        this.setState({
            actualizado: new Date().toLocaleString(),
        })
    }
    render(){
        return (
            <div className={css.box}>
                <div className={css.boxInfo}>
                    <div className={css.info}>Creado : {this.state.creado}</div>
                    <div className={css.info}>Actualizado: {this.state.actualizado}</div>
                </div>
                <button 
                    className={css.button} 
                    onClick={() => {
                        this.props.sumar(this.props.index)
                        this.actualizar()
                    }}
                >
                    +
                </button>
                <div 
                    className={css.number}
                >
                    {this.props.number}
                </div>
                <button 
                    className={css.button} 
                    onClick={() => {
                        this.props.restar(this.props.index)
                        this.actualizar()
                    }}
                >
                    -
                </button>
                <button 
                    className={css.button} 
                    onClick={() => {
                        this.props.removeBox(this.props.index)
                    }}
                >
                    Eliminar
                </button>
            </div>
        )       
    }
}
export default Box