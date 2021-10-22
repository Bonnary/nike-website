import styled from "styled-components";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function LeftSidebar({ boder }) {
  const [Click, setClick] = useState(false);

  return (
    <SideBarWrapper>
      <AnimateSharedLayout>
        <SideBarContainer layout className={Click && "action"}>
          <PageLink to="/">
            <Item1 color="#BBE259" layout className={boder} />
          </PageLink>
          <PageLink to="/RedShoes">
            <Item2 color="#FF1493" layout className={boder} />
          </PageLink>

          <PageLink to="/BlackShoes">
            <Item3 color="#F0F8FF" layout className={boder} />
          </PageLink>
        </SideBarContainer>
        <MenuBotton
          layout
          className={Click && "action"}
          onClick={() => setClick(!Click)}
          whileTap={{ scale: 1.2 }}
        >
          <Icon />
        </MenuBotton>
      </AnimateSharedLayout>
    </SideBarWrapper>
  );
}

const Icon = styled(GiHamburgerMenu)`
  color: white;
  width: 20px;
  height: 20px;
`;

const MenuBotton = styled(motion.div)`
  border-radius: 10px 50px 50px 10px;
  width: 30px;
  height: 40px;
  background: #2d2f41;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  &.action {
  }
`;

const SideBarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: row;
  display: flex;
  position: absolute;
`;
const SideBarContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 50px;
  height: 200px;
  background: #2d2f41;
  border-radius: 0px 20px 20px 0px;
  margin-left: -50px;

  &.action {
    margin-left: 0px;
  }
`;

const Item1 = styled(motion.div)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};

  &.boder1 {
    border: 5px solid #fffafa;
  }
`;
const Item2 = styled(motion.div)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  &.boder2 {
    border: 5px solid #fffafa;
  }
`;
const Item3 = styled(motion.div)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};

  &.boder3 {
    border: 5px solid #fffafa;
  }
`;

const PageLink = styled(Link)`
  display: transparent;
`;
