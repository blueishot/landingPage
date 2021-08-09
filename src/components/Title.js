import titleArt from '../css/titleArt.css'

const Title = (props) => {
    return (
        <div className='titleStyle'>
            {props.children}
        </div>
    )
}

export default Title;