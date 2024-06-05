import { useState } from "react"
import '../styles/card.css'


export const Card = ({ imagen, titulo, descripcion, precio, handlerAgregar, handlerQuitar }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handlerAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handlerQuitar()
        setAdded(false)
    }

    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-descripcion">{descripcion}</h3>
                <p className="tarjeta-precio">${precio}</p>

                {added
                    ? <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickQuitar}
                    >
                        Quitar del Carrito
                    </button>
                    : <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAgregar}
                    >
                        Agregar al Carrito
                    </button>}
            </div>
        </div>
    )
}
