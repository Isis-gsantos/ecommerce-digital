import { dataPhones, dataHeadphones, dataWatch } from "./products"
import { Container, Content, Products } from "./style"

export const Main = () => {
    return (
        <>
            <Container>
                <h2>Mais Vendidos</h2>
                <Content>
                    {dataPhones.map((products) => (
                        <Products key={products.id}>
                            <div>
                                <img src={products.image} alt={products.title} />
                            </div>
                            <h4>{products.title}</h4>
                            <p>R${products.cost}</p>
                            <button>Adicionar ao Carrinho</button>
                        </Products>
                    ))}
                </Content>
            </Container>
        </>
    )
}

