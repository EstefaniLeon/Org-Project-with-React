import "./Footer.css"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/EstefaniLeon/'>
                <AiFillGithub alt='Github' />
            </a>
            <a href='https://twitter.com/Esleos1'>
                <AiFillTwitterCircle alt='Twitter' />
            </a>
            <a href='https://www.linkedin.com/in/estefani-leon-osorio/'>
                <AiFillLinkedin alt='LinkedIn' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Created by
            <a href="https://estefanileonosorio.netlify.app/">
                Estefani León Osorio.
            </a>©️ 2023
        </strong>
    </footer>
}

export default Footer