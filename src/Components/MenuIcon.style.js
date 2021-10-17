import styled from "styled-components";

export const Container = styled.div`
  margin-right: 20px;
  background-color: transparent;

  @media (min-width: 770px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;
`;

export const Line = styled.span`
  width: 100%;
  height: 3px;
  background-color: #15023a;
  transform-origin: left;
  transition: all 0.5s ease;
  z-index: 6;

  &.touch {
    &:first-child {
      background-color: white;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:last-child {
      background-color: white;
      transform: rotate(-45deg);
    }
  }
`;
