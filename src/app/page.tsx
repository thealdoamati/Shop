import Image from "next/image";
import { HomeContainer, Product } from "./home/page";
import { stripe } from "../lib/stripe";
import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import Stripe from "stripe";


async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: price?.unit_amount ? price.unit_amount/100 : 0
    }
  })

  return products
}

export default async function Home() {
  const products = await getProducts()

  return (
    <HomeContainer>
       {products.map(product => {
        return(
          <Product key={product.id}>
            <Image 
              src={product.imageUrl} 
              alt=""
              fill
              className="object-contain"
              priority
            />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
       })}
    </HomeContainer>
  );
}

