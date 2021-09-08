import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0.7rem 0.7rem 1.3rem 0rem rgba(50, 50, 50, 0.22);
  padding: 3rem;
  margin: 2rem;
  width: 60rem;
  transition: all 0.3s ease-out;

  // break
  @media (max-width: 540px) {
     width: 40rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  img {
    height: 15rem;
    margin-right: 4rem;
  }
  p {
    padding-top: 0.4rem;
  }

  // break
  @media (max-width: 540px) {
    img {
      height: 10rem;
      margin-right: 2rem;
    }
  }
`;
