import { dataPhones, dataHeadphones, dataWatch } from "./products";
import { Container, Content, Products } from "./style";
import { BsHeartFill } from "react-icons/bs";

const dataProducts = [dataPhones, dataHeadphones, dataWatch];

export const Main = () => {
    return (
        <>
            <Container>
                <h2>Mais Vendidos</h2>
                <Content>
                    {dataProducts.map((data) => (
                        data.map((product) => (
                            <Products key={product.id}>
                                <span><BsHeartFill className="icon" /></span>
                                <div>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <h4>{product.title}</h4>
                                <p>R${product.cost}</p>
                                <button>Adicionar ao Carrinho</button>
                            </Products>
                        ))
                    ))}
                </Content>
            </Container>
        </>
    );
};