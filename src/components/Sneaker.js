import styled from "styled-components/macro";

const Sneaker = styled.div`
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20rem;
    z-index: 2;
    transition: all 0.75s ease-out;
  }
`;
export default Sneaker;
