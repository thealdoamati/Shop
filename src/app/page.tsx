import Image from "next/image";
import { HomeContainer, Product } from "./home/page";

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image 
          src={camiseta1} 
          alt=""
          fill
          className="object-contain"
          priority
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,90</span>
        </footer>
      </Product>
      <Product>
        <Image 
          src={camiseta2}
          alt=""
          fill
          className="object-contain"
          priority
        />
        <footer className="absolute bottom-[0.25rem] left-[0.25rem] right-[0.25rem] rounded-sm flex align-middle justify-between bg-(rgba(0,0,0,0.6)) ">
          <strong>Camiseta Y</strong>
          <span>R$79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}