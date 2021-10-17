import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroBg,
  BigShoes,
  LogoNameWrapper,
  LogoName,
  LogoDescription,
  SmallShoesPickerWrapper,
  SmallShoesPicker,
  SmallShoes,
  Line,
  TextWrapper,
  Text,
} from "./Hero.style";

import bg from "../Images/Logo.svg";
// import redshoes from "../Images/redshoes.png";
// import blackshoes from "../Images/blackshoes.png";

export default function Hero({Img}) {
  return (
    <HeroContainer>
      <HeroWrapper>
        <LogoNameWrapper>
          <LogoName>NIKE</LogoName>
          <LogoDescription>SUPERREP</LogoDescription>
        </LogoNameWrapper>
        <BigShoes src={Img} />
        <HeroBg src={bg} />
        <SmallShoesPickerWrapper>
          <SmallShoesPicker>
            <SmallShoes src={Img} />
            <Line />
            <TextWrapper>
              <Text>Nike LightGreen</Text>
              <Text>$1449</Text>
            </TextWrapper>
          </SmallShoesPicker>
          {/* <SmallShoesPicker>
            <SmallShoes src={redshoes} />
            <Line />
            <TextWrapper>
              <Text>Nike Hyperace</Text>
              <Text>$1789</Text>
            </TextWrapper>
          </SmallShoesPicker>
          <SmallShoesPicker>
            <SmallShoes src={blackshoes} />
            <Line />
            <TextWrapper>
              <Text>Nike Hyperblack</Text>
              <Text>$2449</Text>
            </TextWrapper>
          </SmallShoesPicker> */}
        </SmallShoesPickerWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}
