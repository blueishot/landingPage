import footerArt from '../css/footerArt.css'

const Footer = () => {
    return (
        <div className='footerBody'>
            <div className='footerList'>
                <div className='footerColumn'>
                    <span style={{fontWeight:'bolder'}}>Politicas</span>
                    <span className='spanHover'>Termos de uso</span>
                    <span className='spanHover'>DMCa notification</span>
                </div>
                <div className='footerColumn'>
                    <span style={{fontWeight:'bolder'}}>Informativos</span>
                    <span className='spanHover'>Perguntas frequentes</span>
                    <span className='spanHover'>Recrutamento</span>
                    <span className='spanHover'>Contato</span>
                </div>
                <div className='footerColumn'>
                    <span style={{fontWeight:'bolder'}}>Acesso rapido</span>
                    <span className='spanHover'>Inicio</span>
                    <span className='spanHover'>Planos futuros</span>
                    <span className='spanHover'>Membros da equipe</span>
                </div>
            </div>
            <div className='footerSite'>
                © 2021 OSOFESS
            </div>
        </div>
    )
}

export default Footer;