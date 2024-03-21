import { Container, Header, ContentBanner, DropdownList, AnimatedList } from './style'
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import headphoneDestaque from '../../images/headphone-1.png'
import { useState } from 'react';

export const Head = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleDropdown = (state: boolean) => {
        setOpen(!state)
    }
    console.log(open);

    return (
        <>
            <Container>
                <Header>
                    <h1>DigitalHub Store</h1>

                    <nav>
                        <ul>
                            <DropdownList>
                                <AnimatedList onClick={() => handleDropdown(open)}>Catálogo</AnimatedList>
                                {open && (
                                    <ul>
                                        <li>Celulares</li>
                                        <li>Headphones</li>
                                        <li>Smartwatch</li>
                                    </ul>
                                )}
                            </DropdownList>
                            <div>
                                <input type="text" placeholder="Buscar" /> <span><BsSearch /></span>
                            </div>
                            <AnimatedList><BsHeart /> Curtidos</AnimatedList>
                            <AnimatedList><BsCart3 /> Carrinho</AnimatedList>
                        </ul>
                    </nav>
                </Header>

                <ContentBanner>
                    <div>
                        <h2>Descubra o Futuro Tech: Celulares, Headphones & Smartwatches Aqui!</h2>
                        <p>Explore nossa Coleção</p>
                    </div>
                    <img src={headphoneDestaque} alt="Headphone branco em destaque no banner" />
                </ContentBanner>
            </Container>
        </>
    )
};