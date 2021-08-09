import Button from './Button.js'
import menuArt from '../css/menuArt.css'
import Logo from './Logo.js'

const Menu = () => {    
    return (
        <div className='menuBody' 
            style={{
                display:'flex', 
                flexDirection:'row'
                }}
        >
            <Logo />
            <div className='buttons'>
                <Button props={true}>
                    Inicio
                </Button>
                <Button props={true}>
                    Filmes
                </Button>
                <Button props={true}>
                    Desenhos
                </Button>
                <Button props={true}>
                    Forum
                </Button>
                <Button props={true}>
                    FAQ
                </Button>
            </div>
            <Button props={true}>
                Perfil
            </Button>
        </div>
        
    )
}

export default Menu;