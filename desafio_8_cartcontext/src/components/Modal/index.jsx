import React from 'react'
import './styles.css';

const Modal = ({ handleClose }) => {
    React.useEffect(() => {
        const handleEsc = (event) => {
            console.log(event)
            if (event.keyCode === 27) {
                console.log('will close')
                handleClose()
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [handleClose])
    const onClose = (event) => {
        console.log(event);
        console.log("Se hizo click en cerrar modal");
        handleClose()
    }
    return (
        <div className='uno'>
            <div className='dos'>
                <h1>This is the modal</h1>
                <button onClick={onClose}>Cerrar Modal</button>
            </div>
        </div>
    )
}

export default Modal