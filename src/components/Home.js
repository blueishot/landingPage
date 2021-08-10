import Menu from './Menu.js'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import homeArt from '../css/homeArt.css'
import Title from './Title.js'
import Footer from './Footer.js'


const Home = () => {
    return (
        window.location.pathname === '/'
        ?
        <div>
            <Menu />
            <div>
                <Splide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/149/moviethumb/akira-505dcafc1a620.jpg' className='imgStyle' draggable='none'/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/185/moviethumb/a-clockwork-orange-5885b23d6c94a.jpg' className='imgStyle' draggable='none' />
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/641/moviethumb/requiem-for-a-dream-5205ec27e7181.jpg' className='imgStyle' draggable='none' />
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/103/moviethumb/taxi-driver-604eb741bbeb6.jpg' className='imgStyle' draggable='none' />
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/15137/moviethumb/evangelion-10--you-are-not-alone-52d70c723a41f.jpg' className='imgStyle' draggable='none' />
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/627/moviethumb/trainspotting-51862de195d24.jpg' className='imgStyle' draggable='none' />
                    </SplideSlide>
                </Splide>
                <Title>
                    NOVIDADES
                </Title>
                <Splide
                options={{
            fixedWidth: 300,
            rewind    : true,
            gap       : 10,
            pagination: false,
            padding   : 10,
                }}>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/412656/moviethumb/chaos-walking-603b9bb9102fd.jpg' draggable='none' style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/8367/moviethumb/robin-hood-prince-of-thieves-5861788196265.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/630004/moviethumb/the-vault-606a2275ae874.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/644583/moviethumb/the-mauritanian-60474e135adef.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/458220/moviethumb/palmer-6039bf4796523.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/399566/moviethumb/godzilla-vs-kong-600aafee37802.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/432799/moviethumb/spoor-5bb16cc0504b5.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/651610/moviethumb/pixie-60fec379818c8.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/675327/moviethumb/shadow-in-the-cloud-5ff6552fc49e0.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/614409/moviethumb/to-all-the-boys-always-and-forever-lara-jean-6051fb51be9a4.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/346687/moviethumb/the-water-man-60c48fb012c01.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/497698/moviethumb/black-widow-5e6e8a54b9963.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/741636/moviethumb/bloodthirsty-6067248a8bbd2.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/527774/moviethumb/dragon-empire-600c1ec1ac5db.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                </Splide>

                <Title>
                    FILMES
                </Title>
                <Splide
                options={{
            fixedWidth: 300,
            rewind    : true,
            gap       : 10,
            pagination: false,
            padding   : 10,
                }}>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/9428/moviethumb/the-royal-tenenbaums-5834c026495ca.jpg' draggable='none' style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/83666/moviethumb/moonrise-kingdom-585980b0dc6d7.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/120467/moviethumb/the-grand-budapest-hotel-5394b64fbc708.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/485403/moviethumb/galveston-5c0f7f1188b51.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/103/moviethumb/taxi-driver-604eb741bbeb6.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/466272/moviethumb/once-upon-a-time-in-hollywood-5c929f22d4aff.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/419430/moviethumb/get-out-59191249a8bf6.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/22538/moviethumb/scott-pilgrim-vs-the-world-5357ee14dca12.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/157336/moviethumb/interstellar-5ce1f78a996ac.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/171274/moviethumb/inherent-vice-552ab8e92fa34.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/11104/moviethumb/chungking-express-5429753e3685e.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/635302/moviethumb/demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train-60d46824f0a9c.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/550/moviethumb/fight-club-5f26b5dccac27.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/301365/moviethumb/the-neon-demon-5e52f615f0a99.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                </Splide>

                <Title>
                    DESENHOS
                </Title>
                <Splide
                options={{
            fixedWidth: 300,
            rewind    : true,
            gap       : 10,
            pagination: false,
            padding   : 10,
                }}>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/412656/moviethumb/chaos-walking-603b9bb9102fd.jpg' draggable='none' style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/8367/moviethumb/robin-hood-prince-of-thieves-5861788196265.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/630004/moviethumb/the-vault-606a2275ae874.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/644583/moviethumb/the-mauritanian-60474e135adef.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/458220/moviethumb/palmer-6039bf4796523.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/399566/moviethumb/godzilla-vs-kong-600aafee37802.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/432799/moviethumb/spoor-5bb16cc0504b5.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/651610/moviethumb/pixie-60fec379818c8.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/675327/moviethumb/shadow-in-the-cloud-5ff6552fc49e0.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/614409/moviethumb/to-all-the-boys-always-and-forever-lara-jean-6051fb51be9a4.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/346687/moviethumb/the-water-man-60c48fb012c01.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/497698/moviethumb/black-widow-5e6e8a54b9963.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/741636/moviethumb/bloodthirsty-6067248a8bbd2.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/527774/moviethumb/dragon-empire-600c1ec1ac5db.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                </Splide>

                <Title>
                    TERROR
                </Title>
                <Splide
                options={{
            fixedWidth: 300,
            rewind    : true,
            gap       : 10,
            pagination: false,
            padding   : 10,
                }}>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/412656/moviethumb/chaos-walking-603b9bb9102fd.jpg' draggable='none' style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/8367/moviethumb/robin-hood-prince-of-thieves-5861788196265.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/630004/moviethumb/the-vault-606a2275ae874.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/644583/moviethumb/the-mauritanian-60474e135adef.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/458220/moviethumb/palmer-6039bf4796523.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/399566/moviethumb/godzilla-vs-kong-600aafee37802.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/432799/moviethumb/spoor-5bb16cc0504b5.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/651610/moviethumb/pixie-60fec379818c8.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/675327/moviethumb/shadow-in-the-cloud-5ff6552fc49e0.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/614409/moviethumb/to-all-the-boys-always-and-forever-lara-jean-6051fb51be9a4.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/346687/moviethumb/the-water-man-60c48fb012c01.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/497698/moviethumb/black-widow-5e6e8a54b9963.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/741636/moviethumb/bloodthirsty-6067248a8bbd2.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                    <SplideSlide>
                        <img src='https://fanart.tv/fanart/movies/527774/moviethumb/dragon-empire-600c1ec1ac5db.jpg'  style={{width:'100%',
                        height:'auto'}} className='filmsStyle'></img>
                    </SplideSlide>
                </Splide>
                <Footer/>
            </div>
        </div>
        :
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
            <img width='500px' draggable='false' src='https://camo.githubusercontent.com/a90e1dd7aecd6635329133d9172677d4a90850058cbd5eb08cfa46f588357e91/68747470733a2f2f692e696d6775722e636f6d2f6c3451506f71382e6a7067'></img>
        </div>
        
    )
}

export default Home;