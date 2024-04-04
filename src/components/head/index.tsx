import { Container, ContentBanner} from './style'
import headphoneDestaque from '../../images/headphone-1.png'
import { Navbar } from './navbar';

export const Head = () => {
    return (
        <>
            <Container>
                <Navbar />

                <ContentBanner>
                    <div>
                        <h2>Descubra o Futuro Tech: Celulares, Headphones & Smartwatches Aqui!</h2>
                        <p>Explore nossa Coleção</p>
                    </div>
                    <img src={headphoneDestaque} alt="Headphone branco em destaque no banner" />
                </ContentBanner>
            </Container>
        </>
    );
};