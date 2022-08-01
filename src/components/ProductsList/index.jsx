import Products from "../Products"
import './styles.css'

const ProductsList = ({products, handleClick})=>{
    return (
        <ul className="ul_list">
            {
                products.map((product)=>(
                    <Products
                    key={product.id}
                    product={product}
                    handleClick={handleClick}
                    />
                ))
            }
        </ul>
    )
}

export default ProductsList