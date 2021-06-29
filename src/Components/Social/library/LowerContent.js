import React from "react";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import LowerContentStyle from "./LowerContentStyle";
import Profile from "./Profile";
import face1 from "./image-colton.jpg";
import face2 from "./image-irene.jpg";
import face3 from "./image-anne.jpg";
import Name from "./Name";
import Message from "./Message";
import Avatar from "./Avatar";
const LowerContent = () => {
  return (
    <LowerContentStyle>
      <Profile>
        <Avatar>
          <img src={face1} alt="" />
          <Name>
            <span>Colton Smith </span>
            <p>Verified Buyer</p>
          </Name>
        </Avatar>

        <Message>
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </Message>
      </Profile>

      <Profile1>
        <Avatar>
          <img src={face2} alt="" />
          <Name>
            <span> Irene Roberts </span>
            <p>Verified Buyer</p>
          </Name>
        </Avatar>

        <Message>
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </Message>
      </Profile1>
      <Profile2  >
        <Avatar>
          <img src={face3} alt="" />
          <Name>
            <span>Anne Wallace </span>
            <p>Verified Buyer</p>
          </Name>
        </Avatar>

        <Message>
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </Message>
      </Profile2 >
    </LowerContentStyle>
  );
};

export default LowerContent;
