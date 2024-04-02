import { Header, AnimatedList, NavbarDesktop, MobileMenu } from './style';
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { cartQuantity } = useShoppingCart();

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
                            <input type="search" placeholder="Buscar" /> <span><BsSearch /></span>
                        </div>
                        <AnimatedList><BsHeart /> Curtidos</AnimatedList>

                        <Link to="/carrinho">
                            <AnimatedList>
                                <BsCart3 /> Carrinho
                                {cartQuantity > 0 && (
                                    <div
                                        style={{
                                            color: "white",
                                            width: "1.5rem",
                                            backgroundColor: "red",
                                            height: "1.5rem",
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                            transform: "translate(60%, 50%)",
                                            display: 'flex',
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                        }}>
                                        {cartQuantity}
                                    </div>
                                )}
                            </AnimatedList>
                        </Link>


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
                            <Link to="/carrinho">
                                <li style={{ position: 'relative' }}>
                                    <BsCart3 /> Carrinho
                                    {cartQuantity > 0 && (
                                        <div
                                            style={{
                                                color: "white",
                                                width: "1.5rem",
                                                backgroundColor: "red",
                                                height: "1.5rem",
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                                top: 0,
                                                transform: "translate(60%, 50%)",
                                                display: 'flex',
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                            }}>
                                            {cartQuantity}
                                        </div>
                                    )}
                                </li>
                            </Link>
                        </ul>
                    )}
                </MobileMenu>
            </Header>
        </>
    );
};
