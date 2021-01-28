import React, {useEffect} from "react";

const BakeryList = ({shops_details, handlePhotos}) => {
  console.log(shops_details);
  // useEffect(() => {
  //   if (shops) {
  //     console.log("handlePhotos");
  //     shops.forEach(shop => handlePhotos(shop.data.photos[0].photo_reference));
  //   }
  // }, [shops]);
  // const {rating, reviews, name, formatted_address} = shops_details;
  return (
    <li>
      {/* <div>
        <p>
          <img src='https://maps.google.com/maps/contrib/105939868585281924493' />
        </p>
        <p>
          <span>{rating}</span>
          <span>({reviews.length})</span>
        </p>
      </div>
      <h3>{name}</h3>
      <p>{formatted_address}</p> */}
    </li>
  );
};

export default BakeryList;
