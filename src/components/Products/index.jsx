import './styles.css'


const Products = ({product, handleClick})=>{

    return (
        <li className="card_products">
            <div className='div_imgCard'>
                <img
                className='image_products'
                src={product.img}
                alt={product.name} />
            </div>
            <div className='div_infosCard'>
                <h2>{product.name}</h2>
                <span className='span_Products'>{product.category}</span>
                <span className='span_price span_Products'>
                    {
                    product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                    }
                </span>
                <button
                className='btn_addCart'
                onClick={()=>handleClick(product.id)}>Adicionar ao carrinho</button>
            </div>
        </li>
    )


}

export default Products