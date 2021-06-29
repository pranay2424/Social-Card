import styled from "styled-components";

const Avatar = styled.div`
  @media only screen and (max-width: 768px) {
  
  
}
  
display: flex;
justify-content: center;
position: relative;
left: 20px;
flex-direction: column;
p{
    margin-top: 5px;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 0px;
    color: hsl(333, 80%, 67%);
}
span{
    color: white;
    font-size:20px;
    font-weight:700;
}
`;

export default Avatar;
