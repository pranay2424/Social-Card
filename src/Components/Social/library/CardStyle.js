import styled from "styled-components";

const CardStyle = styled.div`
  @media only screen and (max-width: 768px) {
   display:flex;
   flex-direction: column;
   align-items: center;
      
  }

  position: relative;
  background-color: transparent;
  z-index: 1; 
  margin: 0px;
  left: 25%;
  font-family: sans-serif;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 1000px;
`;

export default CardStyle;
