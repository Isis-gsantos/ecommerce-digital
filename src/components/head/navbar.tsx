import { Header, AnimatedList, NavbarDesktop, MobileMenu } from './style';
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <Header>
                <h1>DigitalHub Store</h1>

                <NavbarDesktop>
                    <ul>
                        <AnimatedList><a href="#catalogo">Catálogo</a></AnimatedList>
                        <div>
                            <input type="text" placeholder="Buscar" /> <span><BsSearch /></span>
                        </div>
                        <AnimatedList><BsHeart /> Curtidos</AnimatedList>
                        <AnimatedList><BsCart3 /> Carrinho</AnimatedList>
                    </ul>
                </NavbarDesktop>

                <MobileMenu>
                    <button onClick={toggleMenu}><CgMenuRightAlt /></button>
                    {showMenu && (
                        <ul>
                        <li><a href="#catalogo">Catálogo</a></li>
                        <div>
                            <input type="text" placeholder="Buscar" /> <span><BsSearch /></span>
                        </div>
                        <li><BsHeart /> Curtidos</li>
                        <li><BsCart3 /> Carrinho</li>
                    </ul>
                    )}
                </MobileMenu>
            </Header>
        </>
    );
};

{/* <DropdownList>
    <AnimatedList onClick={() => handleDropdown(open)}>Catálogo</AnimatedList>
    {open && (
        <ul>
            <li>Celulares</li>
            <li>Headphones</li>
            <li>Smartwatch</li>
        </ul>
    )}
</DropdownList> */}