
import './App.css'
import ProductList from './Components/ProductList'


function App() {

  const feature = [
    {
      img: `https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70`,
      id: 1,
      name: "Laptop",
      Prices: 200000,
      company: "HP"
    }
    ,

    {
      img: `https://rukminim2.flixcart.com/image/312/312/xif0q/television/i/m/0/-original-imah9ttkkjmahfs7.jpeg?q=70`,
      id: 2,
      name: "TV",
      Prices: 200000,
      company: "LG"
    },


    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/h/0/6-5-hq2415-001-6-5-nike-black-white-anthracite-wolf-grey-original-imahg5zhq94zqsmq.jpeg?q=70",
      name: "shoes",
      Prices: 3000,
      company: "Nike"
    }
    , {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70",
      name: "Phone",
      Prices: 30000,
      company: "Oppo"
    }
  ]



  return (
    <>

   <ProductList product = {feature}/>

    </>
  )
}

export default App
