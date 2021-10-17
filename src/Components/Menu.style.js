import styled from "styled-components";
export const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #15023a;
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

  &.active {
    right: 0;
  }
`;

export const TextWrapper = styled.ul`
  margin: 0;
  padding: 0;
  width: 60%;
  margin-bottom: 25px;
`;

export const Text = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color: white;
  background-color: #15023a;
  font-family: "Roboto", sans-serif;
  
`;
