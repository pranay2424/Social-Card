import styled from "styled-components";

const LowerContentStyle = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

  }
  background-color: transparent;
  height: 50%;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default LowerContentStyle;
