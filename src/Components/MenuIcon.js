import { Container, Hamburger, Line} from "./MenuIcon.style";

export default function MenuIcon({ Click, setClick }) {
  return (
    <Container>
      <Hamburger onClick={() => setClick(!Click)}>
        <Line className={Click && "touch"} />
        <Line className={Click && "touch"} />
        <Line className={Click && "touch"} />
      </Hamburger>
    </Container>
  );
}
