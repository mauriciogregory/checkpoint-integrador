import Header from '../../components/header'
import Footer from '../../components/footer'
import FooterDown from '../../components/footerdown'
import { useCart } from '../../context/cart'
import { formatPrice } from '../../hooks/useUtil'
import "./styles.scss";

export default function Cart() {
  const cartCTX = useCart();

  const setQuantity = (e, product) => {
    cartCTX.setProductQuantity(product.id, Number(e.target.value));

  }
  console.log(cartCTX.products);
    return (
      <section>
        <Header />
          {cartCTX?.products?.length > 0 ? cartCTX.products.map(product => {
            console.log(product.quantity)
            return (
              <div key={product.id}>
                {product.quantity > 0 ? <div className="product-card" >
                  <img src={product.image} alt="imagem do produto" className='product-img' />
                  <div className='product-description'>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className='product-quantity-box'>
                    <label>Quantidade:</label>
                    <input type="number" className='quantity-input' defaultValue={product.quantity} onChange={(e) => setQuantity(e, product)} />
                  </div>
                  <h3 className='product-price'>{formatPrice(product.price * product.quantity)}</h3>
                </div> : null}
              </div>
            )
          }) : <h1 className='empty-cart-msg'>Você ainda não possui produtos no carrinho <br />{`:(`}</h1>}
        <Footer />
        <FooterDown />
      </section>
    )
}