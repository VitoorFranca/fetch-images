import './styles/Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="icons">
                    <a href="https://api.whatsapp.com/send?phone=5571986237773&text=Fala,%20Vitor.%20Podemos%20conversar?"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://github.com/VitoorFranca"><i className="fab fa-github"></i></a>
                </div>
                <p className='credits'>
                    Developed by <a href="https://github.com/VitoorFranca">Vitor França</a> <br/> Images made available by <a href="https://pixabay.com/" target="_blank" rel="noreferrer">Pixabay</a>
                </p>
                <p>
                    &copy; 2021 <strong>Vitor França</strong>
                </p>
            </footer>
        </>
    )
}

export default Footer