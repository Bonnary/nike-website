import {
  TopbarContainer,
  TopbarWrapper,
  Logo,
  TextContainer,
  Text,
  IconWrapper,
  SearchIcon,
  ShoppingCart,
} from "./Topbar.style";

import logo from "../Images/Logo.svg";
import MenuIcon from "./MenuIcon";
export default function Topbar({ Click, setClick }) {

  return (
    <TopbarContainer>
      <TopbarWrapper>
        <Logo src={logo} />
        <TextContainer>
          <Text>HOME</Text>
          <Text>MAN</Text>
          <Text>WOMAN</Text>
          <Text>KID</Text>
          <Text>CATEGORY</Text>
        </TextContainer>
        <IconWrapper>
          <SearchIcon />
          <ShoppingCart />
          <MenuIcon Click={Click} setClick={setClick} />
        </IconWrapper>
      </TopbarWrapper>
    </TopbarContainer>
  );
}
