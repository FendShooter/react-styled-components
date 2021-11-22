import styled from 'styled-components';
export default function Card({ id, title, body, image }, layout) {
  return (
    <Styledcard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </Styledcard>
  );
}

const Styledcard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || 'row'};
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  & > div {
    flex: 1;
    margin-right: 4rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.7rem;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
  img {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
