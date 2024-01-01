import React from "react";
import VoicesCard from "../VoicesCard/VoicesCard";

const Voices = React.memo(() => {
  return (
    <section>
      <div className="container">
        <VoicesCard />
      </div>
    </section>
  );
});

export default Voices;
