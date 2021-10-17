import styled from "styled-components";
import { FaSearch} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const TopbarContainer = styled.div`
  height: 64px;
`;

export const TopbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Logo = styled.img`
  margin-top: 32px;
  margin-left: 20px;
  max-height: 30px;

  @media (min-width: 428px) {
    margin-left: 53px;
  }
`;

export const TextContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 37px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Text = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 37px;
`;

export const SearchIcon = styled(FaSearch)`
  width: 30px;
  height: 22px;
  margin-right: 70px;
  
  @media (max-width: 770px) {
    display: none;
  }
`;

export const ShoppingCart = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 22px;
  margin-right: 70px;

  @media (max-width: 770px) {
    display: none;
  }
`;
