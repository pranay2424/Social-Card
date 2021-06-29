import styled from "styled-components";

const Avatar = styled.div`
  @media only screen and (max-width: 768px) {
    width:100%;
 display:flex;
 justify-content: center;
 align-items: center;
 position: relative;
 left: 0px;

 img {
  border-radius: 50%;
  width: 70px;
  
}
  }
 width:100%;
 display:flex;
 position: relative;
 left:20px;
 flex-direction: row;
 align-items: center;
 
 img {
  border-radius: 50%;
  width: 40px;
  
}
`;

export default Avatar;
