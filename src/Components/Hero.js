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
import LeftSidebar from "./LeftSidebar";
export default function Hero({ Img, boder }) {
  return (
    <HeroContainer>
      <HeroWrapper>
        <LogoNameWrapper
          variants={downVariants}
          initial="hidden"
          animate="visible"
        >
          <LogoName>NIKE</LogoName>
          <LogoDescription>SUPERREP</LogoDescription>
        </LogoNameWrapper>
        <BigShoes
          src={Img}
          variants={downVariants}
          initial="hidden"
          animate="visible"
        />
        <LeftSidebar boder={boder}/>
        <HeroBg src={bg} />
        <SmallShoesPickerWrapper
          variants={upVariants}
          initial="hidden"
          animate="visible"
        >
          <SmallShoesPicker>
            <SmallShoes src={Img} />
            <Line />
            <TextWrapper>
              <Text>Nike LightGreen</Text>
              <Text>$1449</Text>
            </TextWrapper>
          </SmallShoesPicker>
        </SmallShoesPickerWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}

const downVariants = {
  hidden: {
    opacity: 0,
    y: "-50px",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};

const upVariants = {
  hidden: {
    opacity: 0,
    y: "50px",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};