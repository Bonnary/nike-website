import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroBg = styled.img`
  width: 350.54px;

  @media (min-width: 1025px) {
    width: 1160px;
  }
`;

export const BigShoes = styled.img`
  width: 313px;
  position: absolute;
  background-color: transparent;
  margin-bottom: 71px;

  @media (min-width: 1025px) {
    width: 745px;
  }
`;

export const LogoNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: transparent;
  z-index: 3;
  margin-bottom: 250px;
  margin-right: 150px;

  @media (min-width: 1025px) {
    margin-right: 500px;
    margin-bottom: 350px;
  }
`;

export const LogoName = styled.h1`
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
  font-family: "Roboto", sans-serif;

  @media (min-width: 1025px) {
    font-size: 70px;
  }
`;

export const LogoDescription = styled.h1`
  font-size: 20px;
  font-family: "Roboto", sans-serif;

  @media (min-width: 1025px) {
    font-size: 35px;
  }
`;

export const SmallShoesPickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
`;

export const SmallShoesPicker = styled.div`
  border-radius: 16px;
  background-color: #ceeb84;
  width: 350px;
  height: 90px;
  display: flex;
  flex-direction: row;
  /* margin-right: 67px; */
`;

export const SmallShoes = styled.img`
  width: 146px;
  height: 76px;
  background-color: transparent;
`;

export const Line = styled.div`
  border: 3px solid #1c1e1a;
  margin-left: 20px;
  margin-top: 7px;
  height: 70px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-top: 14px;
  margin-left: 20px;
  gap: 15px;
  
`;
export const Text = styled.h1`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  background-color: transparent;
`;