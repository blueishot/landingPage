import Menu from './Menu.js'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import homeArt from '../css/homeArt.css'


const Home = () => {
    return (
        <div>
            <Menu />
            <Splide>
                <SplideSlide>
                    <img src='https://i.ytimg.com/vi/MtQg0IDeK4k/maxresdefault.jpg' className='imgStyle'/>
                </SplideSlide>
                <SplideSlide>
                    <img src='https://i.ytimg.com/vi/4RqsrOSIYE0/maxresdefault.jpg' />
                </SplideSlide>
            </Splide>
        </div>
        
    )
}

export default Home;