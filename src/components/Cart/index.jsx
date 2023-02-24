import './styles.css'

const Cart = ({products, currentSale, setCurrentSale})=>{

    function deleteProduct (id){
        const findedProduct = currentSale.filter((product)=>{
            return id !== product.id
        })
        setCurrentSale(findedProduct)
    }

    return(
        <aside className='aside_cart'>
            <div className="div_tituloCart">
                <h3>Carrinho de compras</h3>   
            </div>
            <div className='all_cart'>
                <div className='cart_inside'>
                    {
                        currentSale < 1 ?(
                            <>
                                <p>Sua sacola está vazia</p>
                                <p>Adicione itens ao carrinho</p>
                            
                            </>
                        )
                        :
                        (
                            <ul className='ul_cart'>
                                {
                                    currentSale.map((product)=>(
                                        <li
                                        className='li_cart'
                                        key={product.id}>
                                            <div className='divImg'>
                                                <img 
                                                className='img_cart'
                                                src={product.img}
                                                alt={product.name} />
                                            </div>
                                            
                                            <div className='div_infosCart'>
                                                <h3 className='title_Cart'>{product.name}</h3>
                                                <span>{product.category}</span>
                                            </div>
                                            <button
                                            className='btn_removeCart'
                                            onClick={()=>deleteProduct(product.id)}>Remover</button>
                                        </li>
                                    ))}
                            </ul>
                        )}
                </div>

                <div className='div_totalPrice'>
                    <p className='p_cart'>Total</p>
                    <span className='span_priceCart'>
                        {
                            currentSale.map((product) => product.price)
                            .reduce((acc, cur) => acc + cur, 0)
                            .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        }
                        
                    </span>
                </div>
                    <button
                    className='btn_removeAll'
                    onClick={()=> setCurrentSale([])}>Remover todos</button>
            </div>
        </aside>
    )}

export default Cart