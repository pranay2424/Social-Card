import styled from "styled-components";

const UpperContent = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  
  background-color: transparent;
  height: 50%;
  display: flex;
  width: auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export default UpperContent;
