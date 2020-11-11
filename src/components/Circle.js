import styled from "styled-components/macro";

const Circle = styled.div`
  width: 15rem;
  height: 15rem;
  background: linear-gradient(
    to right,
    rgba(245, 70, 66, 0.75),
    rgba(8, 83, 156, 0.75)
  );
  position: absolute;
  border-radius: 50%;
  z-index: 1;
`;
export default Circle;
