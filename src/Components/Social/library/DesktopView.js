import styled from "styled-components";

const DesktopView = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    flex-direction: column;
    display: flex;
    width: 90%;
  }
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
`;

export default DesktopView;
