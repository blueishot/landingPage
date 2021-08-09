import buttonArt from '../css/buttonArt.css'

const Button = (props) => {
    return (
        <button className='buttonArt'>
            {props.children}
        </button>
    )
}

export default Button;