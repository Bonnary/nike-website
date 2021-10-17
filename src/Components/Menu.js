import React from "react";
import { Container, TextWrapper, Text } from "./Menu.style";
export default function Menu({ Click }) {
  return (
    <Container className={Click && "active"}>
      <TextWrapper>
        <Text>HOME</Text>
        <Text>MAN</Text>
        <Text>WOMAN</Text>
        <Text>KID</Text>
        <Text>CATEGORY</Text>
      </TextWrapper>
    </Container>
  );
}
