import React from "react";
import Info from "./Info";
import Stay from "../Stay";

import stays from "../../assets/data/stays.json";

const Stays = () => {
  const calcStays = () => {
    let lenght = stays.length;
    let staysNumber = lenght + " stays";
    console.log(staysNumber);
    if (lenght > 12) {
      staysNumber = "12+ stays";
    }

    return staysNumber;
  };

  return (
    <div className="row stays">
      <Info location="Finland" stays={calcStays()} />
      {stays.map((i) => (
        <Stay
          image={i.photo}
          description={i.title}
          rating={i.rating}
          super_host={i.superHost}
        />
      ))}
    </div>
  );
};

export default Stays;
