import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ variant }) =>
    variant === 'outline' ? '#003333' : '#fff'};
  color: ${({ variant }) => (variant === 'outline' ? '#fff' : '#003333')};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default Button;
