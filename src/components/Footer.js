import footerArt from '../css/footerArt.css'

const Footer = () => {
    return (
        <div className='footerBody'>
            <div className='footerList'>
                <div className='footerColumn'>
                    <span style={{fontWeight:'bolder'}}>Politicas</span>
                    <span className='spanHover' onClick={() => window.location.href='https://github.com/blueishot'}>Termos de uso</span>
                    <span className='spanHover' onClick={() => window.location.href='https://github.com/blueishot'}>DMCa notification</span>
                </div>
                <div className='footerColumn'>
                    <span style={{fontWeight:'bolder'}}>Informativos</span>
                    <span className='spanHover' onClick={() => window.location.href='https://github.com/blueishot'}>Perguntas frequentes</span>
                    <span className='spanHover' onClick={() => window.location.href='https://github.com/blueishot'}>Recrutamento</span>
                    <span className='spanHover' onClick={() => window.location.href='https://github.com/blueishot'}>Contato</span>
                </div>
                <div className='footerColumn'>
                    <span style={{fontWeight:'bolder'}}>Acesso rapido</span>
                    <span className='spanHover' onClick={() => window.location.href='https://github.com/blueishot'}>Inicio</span>
                    <span className='spanHover'  onClick={() => window.location.href='https://github.com/blueishot'}>Planos futuros</span>
                    <span className='spanHover' onClick={() => window.location.href='https://github.com/blueishot'}>Membros da equipe</span>
                </div>
            </div>
            <div className='footerSite'>
                © 2021 OSOFESS
            </div>
        </div>
    )
}

export default Footer;