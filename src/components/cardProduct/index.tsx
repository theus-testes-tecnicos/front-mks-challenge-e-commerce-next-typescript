import { IProduct } from "@/types";
import * as S from "./styles";
import { RiShoppingBag3Line } from "react-icons/ri";

interface ICardProductProps {
  product: IProduct;
}

export const CardProduct = ({ product }: ICardProductProps) => {
  return (
    <S.Container>
      {product && (
        <>
          <S.BoxImg>
            <img src={product.image} alt={product.name} />
          </S.BoxImg>

          <S.BoxContent>
            <div className="content_top">
              <h3 title={product.name}>{`${product.brand} ${product.name}`}</h3>
              <span>R$ {product.price}</span>
            </div>

            <h4 title={product.description}>{product.description}</h4>
          </S.BoxContent>

          <S.BoxButton>
            <button>
              <RiShoppingBag3Line />
              <span>COMPRAR</span>
            </button>
          </S.BoxButton>
        </>
      )}
    </S.Container>
  );
};
