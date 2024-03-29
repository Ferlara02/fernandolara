import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import "./contact.css";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_v837z66', 'template_wrj7b1d', form.current, 'vSSQ5-PdZnwQ58Aof')
            .then((result) => {
                console.log(result.text);
                toast.success('Formulario enviado con éxito!', {
                    position: "bottom-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false);
            }).catch((error) => {
                toast.error(`Algo salio mal ${error}`, {
                    position: "bottom-right",
                    autoClose: 700,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }); 
            })
        e.target.reset()
    }
    return(
        <>
        <section className="contact section" id="contacto">  
            <h3 className="section__title">Conectemos!</h3>
            <span className="section__subtitle">Escribime</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <form ref={form} onSubmit={sendEmail} className="contact__form" action="">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Nombre</label>
                            <input type="text" className="contact__form-input" placeholder="Tu nombre y apellido" name="nombre" required/>
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input name="mail" type="email" className="contact__form-input" placeholder="Tu email" required/>
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Mensaje</label>
                            <textarea name="mensaje" id="" cols="30" rows="10" className="contact__form-input" placeholder="Escribeme tu propuesta" required></textarea>
                        </div>
                        <button className="button button--flex">
                            {loading ? <Spinner animation="border" role="status"><span>Enviando...</span>
                            </Spinner> : <span>Enviar</span> } 
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <ToastContainer />
        </>
    )
}

export default Contact