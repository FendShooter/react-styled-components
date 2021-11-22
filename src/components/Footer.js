import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='logo' />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolorem facere maxime, vel deserunt amet excepturi architecto.
            </li>
            <li>+1 555-444-5555</li>
            <li>example@hubble.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What we do?</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </Flex>
        <p>&copy; CopyRights</p>
      </Container>
    </StyledFooter>
  );
}
