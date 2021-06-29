import React from "react";
import CardStyle from "./CardStyle";
import UpperContent from "./UpperContent";
import Lines from "./Lines";
import Ratings from "./Ratings";
import Stars1 from "./Stars1";
import Stars from "./Stars";
import Stars2 from "./Stars2";
import LowerContent from "./LowerContent";

const Card = () => {
  return (
    <CardStyle>
      <UpperContent>
        <Lines>
          <h1>10,000+ of our users love our products.</h1>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </Lines>
        <Ratings>
          <Stars />
          <Stars1 />
          <Stars2 />
        </Ratings>
      </UpperContent>

      <LowerContent />
    </CardStyle>
  );
};

export default Card;
