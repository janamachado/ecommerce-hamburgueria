
import './App.css';
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList/index'
import Cart from './components/Cart';

import logo from '../src/img/logo_kenzieBurguer.png'

function App() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(()=>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((res)=> res.json())
    .then((res)=> setProducts(res))
    .catch((err)=> console.error(err))
}, [])
  
  function showProducts (data){
    
     const filteredProduct = products.filter((product)=> product.name.toLowerCase().includes(data.toLowerCase())) ||
      products.category.toLowerCase().includes(data.toLowerCase())
      setFilteredProducts(filteredProduct)
      }

  function handleClick (id){
    const findedProduct = products.find((prod) => prod.id === id)

    currentSale.includes(findedProduct) ?
    window.alert("Produto já está na sua lista")
    :
    setCurrentSale([...currentSale, findedProduct])
  } 

  return (
    <div className="App">
      <div className='div_container'>
        <header className='App-header'>
          <img src={logo} alt="Logo Kenzie Burguer" />
          <div className='div_input'>
            <input
            type="text"
            placeholder='Digite sua pesquisa'
            className='input_search'
            onChange={(e)=> showProducts(e.target.value)}
            />
            <button
            className='btn_search'
            onClick={()=> showProducts()}>Pesquisar</button>
          </div>
        </header>
      </div>
      <div className='div_infosProducts'>
        <main>
          {filteredProducts[0] === undefined ? (
            <ProductsList
            products={products}
            handleClick={handleClick} />
          ):(
            <ProductsList
            products={filteredProducts}
            handleClick={handleClick} />
          )}
        </main>
        <section className='section_cart'>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </section>
      </div>
    </div>
  );
}

export default App;
