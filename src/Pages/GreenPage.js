import Hero from "../Components/Hero";
import Topbar from "../Components/Topbar";
import { useState } from "react";
import Menu from "../Components/Menu";

import styled from "styled-components";
import greenshoes from "../Images/greenshoes.png";
export default function GreenPage() {
  const [Click, setClick] = useState(false);
  const boder = "boder1"

  return (
    <BgContainer>
      <Menu Click={Click} />
      <Topbar Click={Click} setClick={setClick} />
      <Hero Img={greenshoes}  boder={boder}/>
    </BgContainer>
  );
}

export const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bbe259;
`;
