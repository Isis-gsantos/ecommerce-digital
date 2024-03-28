// import { useShoppingCart } from "../../context/ShoppingCartContext";
// import { dataPhones, dataHeadphones, dataWatch } from "../products";
// import { Container, Content, Products } from "./style";
// import { BsHeartFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

// export const dataProducts = [dataPhones, dataHeadphones, dataWatch];

// export const Main = (id: any) => {
//     const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
//     const quantity = getItemQuantity(id);

//     return (
//         <>
//             <Container>
//                 <h2>Mais Vendidos</h2>
//                 <Content id="catalogo">
//                     {dataProducts.map((products, index) => (
//                         products.map((product) => (
//                             <Products key={product.id}>
//                                 <Link to={`/product-page/${index}/${product.id}`} state={{ category: index }}>
//                                     <span><BsHeartFill className="icon" /></span>
//                                     <div>
//                                         <img src={product.image} alt={product.title} />
//                                     </div>
//                                     {/* <Link to={`/product-page/${index}/${product.id}`} state={{ category: index }}> */}
//                                     <h4>{product.title}</h4>
//                                     {/* </Link> */}
//                                     <p>R${product.cost}</p>
//                                     {/* <button>Adicionar ao Carrinho</button> */}
//                                 </Link>
//                                 <div>

//                                     {quantity === 0 ? (
//                                     <button onClick={() => increaseCartQuantity(id)}>
//                                         Adicionar ao carrinho
//                                     </button>) : (
//                                         <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10' }}>
//                                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                                 <button onClick={() => decreaseCartQuantity(id)}>-</button>
//                                                 <div>
//                                                     <p>{quantity}</p> no carrinho
//                                                 </div>
//                                                 <button onClick={() => increaseCartQuantity(id)}>+</button>
//                                             </div>
//                                             <button style={{ color: 'red' }} onClick={() => removeFromCart(id)}>Remover</button>
//                                         </div>
//                                     )}
//                                 </div>
//                                 {/* </Link> */}
//                             </Products>
//                         ))
//                     ))}
//                 </Content>
//             </Container>
//         </>
//     );
// };

// No arquivo Main.tsx

import { useShoppingCart } from "../../context/ShoppingCartContext";
import { dataPhones, dataHeadphones, dataWatch } from "../products";
import { Container, Content, Products, StyledButtonCart } from "./style";
import { BsHeartFill, BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const dataProducts = [dataPhones, dataHeadphones, dataWatch];

export const Main = () => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    return (
        <>
            <Container>
                <h2>Mais Vendidos</h2>
                <Content id="catalogo">
                    {dataProducts.map((products, index) => (
                        products.map((product) => {
                            const id = `${index}-${product.id}` // identificador único para cada produto combinando o índice da categoria e o ID do produto
                            const quantity = getItemQuantity(id) //identificador único de cada produto ao chamar a função getItemQuantity. Isso garante que a quantidade seja corretamente obtida para cada item individual, levando em consideração seu identificador único.

                            return (
                                <Products key={id}>
                                    <Link to={`/product-page/${index}/${product.id}`} state={{ category: index }}>
                                        <span><BsHeartFill className="icon" /></span>
                                        <div>
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <h4>{product.title}</h4>
                                        <p>R${product.cost}</p>
                                    </Link>
                                    <div>
                                        {quantity === 0 ? (
                                            <button onClick={() => increaseCartQuantity(id)}>
                                                {/* Ao adicionar um item ao carrinho, utilizei o identificador único do produto para garantir que apenas o item selecionado seja afetado */}
                                                Adicionar ao carrinho
                                            </button>
                                        ) : (
                                            <article>
                                                <StyledButtonCart>
                                                    <button onClick={() => increaseCartQuantity(id)}>+</button>
                                                    <p>{quantity}</p>
                                                    <button onClick={() => decreaseCartQuantity(id)}>-</button>
                                                    <button className="removeFromCart" onClick={() => removeFromCart(id)}><BsFillTrash3Fill /></button>
                                                </StyledButtonCart>
                                            </article>
                                        )}
                                    </div>
                                </Products>
                            );
                        })
                    ))}
                </Content>
            </Container>
        </>
    );
};
