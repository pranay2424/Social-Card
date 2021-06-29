import styled from "styled-components";
const Lines = styled.div`
  @media only screen and (max-width: 768px) {
    font-family: "Helvetica";
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex-wrap: wrap;
  }

  /* DesktopView */

  h1 {
    color: rgb(81, 31, 80);
    font-weight: 600;
    font-size: 35px;
    width: 300px;
    display: flex;
  }
  p {
    font-weight: 400;
    color: hsl(303, 10%, 53%);
    width: 400px;

    font-size: 20px;
  }
  font-family: "Helvetica";
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex-wrap: wrap;
`;

export default Lines;
