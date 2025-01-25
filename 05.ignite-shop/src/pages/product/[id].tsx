import { useRouter } from 'next/router';

import { ImageContainer, ProductContainer } from '@/styles/pages/product';
import Image from 'next/image';

import Camiseta1 from '../../assets/camiseta1.jpg';
import { ProductDetails } from '../../styles/pages/product';

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={Camiseta1} alt='' />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta 1</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio non fugit doloribus ab exercitationem? Ipsam, maxime dolor? Fuga, id. Assumenda non nobis error natus? Explicabo nisi praesentium suscipit laboriosam.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
