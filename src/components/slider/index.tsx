import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css"; //css padrão do swiper
import "swiper/css/pagination"; //aquelas bolinhas 
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import celularBanner from '../../images/celular-1.png'
import headphoneBanner from '../../images/headphone-4.png'
import watchBanner from '../../images/watch-3.png'

register();

export const Slider = () => {
    interface Item {
        id: string;
        image: string;
        description: string;
        backgroundColor: string;
        name: string;
    }
    
    const data: Item[] = [
        {
            id: '1',
            description: "Conheça nossa coleção de celulares",
            image: celularBanner,
            backgroundColor: '#ffc8dd',
            name: 'Celular'
        },
        {
            id: '2',
            description: "Conheça nossa coleção de headphones",
            image: headphoneBanner,
            backgroundColor: '#bde0fe',
            name: 'Headphone'
        },
        {
            id: '3',
            description: "Conheça nossa coleção de smart watch",
            image: watchBanner,
            backgroundColor: '#cdb4db',
            name: 'Smart Watch'
        }
    ];

    return (
        <Container>
            <Swiper
                modules={[EffectFade]}
                effect="fade"
                slidesPerView={1} //quantos slides eu quero mostrar na tela
                pagination={{ clickable: true }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} style={{ backgroundColor: item.backgroundColor }} className="banner">
                        <Content>
                            {/* Dentro do SwiperSlide, você pode renderizar as imagens */}
                            <h3>{item.description}</h3>
                            <img src={item.image} alt={item.name} />
                        </Content>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

const Container = styled.section`
    min-height: 30vh;
    max-width: 1500px;
    margin: 0 auto;
    padding: 50px;
    background-color: #f7ede2;

    .banner {
        border-radius: 20px;
    }
`;

const Content = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-height: 300px;

    img {
        max-height: 300px;
        object-fit: cover;
    }
`