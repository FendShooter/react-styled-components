import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import content from './contents';
import Card from './components/Card';
import Footer from './components/Footer';
import { FancyButton } from './components/styles/Button.styled';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <Container>
        {content &&
          content.map((item, index) => <Card key={index} {...item}></Card>)}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
