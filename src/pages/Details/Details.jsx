// import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';



const Details = () => {
    const Information = useLoaderData();
    console.log(Information)
    const {
        toyName,
        sellerName,
        email,
        photoUrl,
        price,
        rating,
        quantity,
        description,
        subCategory,
      } = Information;
    console.log(Information)
    return (
        <div className='flex justify-between'>
            <div className=" flex items-center justify-center">
          <div>
            <p>
              <span className="font-semibold text-lg">ToyName:</span> {toyName}
            </p>
            <p>
              <span className="font-semibold text-lg">SellerName:</span>{" "}
              {sellerName}
            </p>
            <p>
              <span className="font-semibold text-lg">SellerEmail:</span>{" "}
              {email}
            </p>
            <p>
              <span className="font-semibold text-lg">Price:</span> ${price}
            </p>
            <p>
              <span className="font-semibold text-lg">Ratings:</span> {rating}
            </p>
            <p>
              <span className="font-semibold text-lg">Avail.Qnty:</span>{" "}
              {quantity} pics
            </p>
            <p>
              <span className="font-semibold text-lg">Desc:</span> {description}
            </p>
            <p>SubCategory : {subCategory}</p>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-slate-200">
        
          <img
            src={photoUrl}
            alt={`img of ${toyName}`}
            className="w-96 h-96 object-cover"
          />
        </div>
        </div>
    );
};

export default Details;