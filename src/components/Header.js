import { Container } from './styles/Container.styled';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Flex } from './styles/Flex.styled';
import Button from './styles/Button.styled';

export default function Header() {
  return (
    <StyledHeader bg='red'>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' />
          <Button>Try it for free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The community Your Fans will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              temporibus tempora voluptatibus optio officiis ipsam eaque
              pariatur ipsa et laboriosam!
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' />;
        </Flex>
      </Container>
    </StyledHeader>
  );
}
