import styled from "styled-components/macro";

const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all 0.75s ease-out;

  button {
    padding: 0.5rem 2rem;
    background: none;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    color: #585858;
  }
`;
export default Sizes;
