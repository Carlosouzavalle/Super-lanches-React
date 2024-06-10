import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// import imgs
import Banner1 from './assets/img/banner1.jpg'
import Banner2 from './assets/img/banner2.jpg'
import Banner3 from './assets/img/banner3.jpg'

// Importe suas imagens de produtos
import pedido1 from './assets/img/pedido1.webp'
import pedido2 from './assets/img/pedido2.webp';
import pedido3 from './assets/img/pedido3.webp';
import pedido4 from './assets/img/pedido4.jpg';



//Import components
import Header from './components/layout/Header'
import Banner from './components/layout/Banner'
import Orders from './components/pages/Orders'
import Footer from './components/footer/Footer'



function App() {

  const images = [Banner2, Banner3]; // Lista de imagens de banner
  const banner2 = [Banner1]; // Lista de imagens de banner

  // Este Trech aqui "products" é referente ao cardapio
  const products = [
    { name: "Coca-Cola", price: "5,00", image: pedido2, rating: 3 },
    { name: "Burger", price: "15,00", image: pedido4, rating: 4 },
    { name: "Burger com bacon", price: "25,00", image: pedido3, rating: 4 },
    { name: "Pizza", price: "5,00", image: pedido2, rating: 5 },
    { name: "Coca-Cola", price: "5,00", image: pedido4, rating: 3 },
    { name: "Burger", price: "15,00", image: pedido2, rating: 4 },
    { name: "Burger com bacon", price: "25,00", image: pedido2, rating: 4 },
    { name: "Pizza", price: "5,00", image: pedido3, rating: 5 },
    // Adicione mais produtos aqui
  ];

  const bebidas = [
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    { name: "Coca-Cola", price: "5,00", image: pedido1, rating: 3 },
    // Adicione mais produtos aqui
  ];



  return (
    <>
      <Header />
      <Banner images={images} />
      <section id='cardapio'>
        <Orders id='cardapio' title="Lanches mais Vendidos" products={products} />
      </section>
      <Banner images={banner2} />

      <section id='bebidas'>
        <Orders id='bebidas' title="Lanches mais Vendidos" products={bebidas} />
      </section>  
      <Footer />
    </>
  )
}

export default App
