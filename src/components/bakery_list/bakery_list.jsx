import React from "react";

const BakeryList = ({shops}) => {
  console.log(shops);
  return (
    <ul>
      {shops &&
        Object.keys(shops).map(key => {
          return (
            <li>
              {shops[key].id}
            </li>
          );
        })}
    </ul>
  );
};

export default BakeryList;
