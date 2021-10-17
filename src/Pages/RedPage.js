import Hero from "../Components/Hero";
import Topbar from "../Components/Topbar";
import { useState } from "react";
import Menu from "../Components/Menu";

import styled from "styled-components";
import greenshoes from "../Images/redshoes.png";
export default function RedPage() {
  const [Click, setClick] = useState(false);

  return (
    <BgContainer>
      <Menu Click={Click} />
      <Topbar Click={Click} setClick={setClick} />
      <Hero Img={greenshoes} />
    </BgContainer>
  );
}

export const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff1493;
`;
