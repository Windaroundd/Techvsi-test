import React from "react";
import Button from "../Button/Button";

const Card = ({ data }) => {
  return (
    <div className="flex justify-center mt-5 lg:mt-0">
      <div className="card">
        <div
          className="card-header"
          style={{
            backgroundColor: data.bgColor,
          }}
        >
          <div>
            <img src={data.img} alt="" />
          </div>
          <div className="uppercase card-header__content">
            <h2 className="font-bold text-xl ">{data.type}</h2>
            <p className="font-bold text-[56px] leading-[65.63px] ">
              ${data.starting_price}
            </p>
            <p className="font-normal ">Starting</p>
          </div>
        </div>
        <div className="card-body ">
          <div className=" card-body__content ">
            <div className="grid grid-cols-1 divide-y divide-solid divide-[#DADADA]">
              {data.list_price.slice(0, 3).map((item) => {
                return (
                  <p key={item.title} className="text-base py-3">
                    {item.title} - ${item.price}
                  </p>
                );
              })}
            </div>
            <div className="grid grid-cols-1 divide-y divide-solid divide-[#DADADA]">
              {data.list_price.slice(3).map((item) => {
                return (
                  <p key={item.title} className="text-base py-3">
                    {item.title} - ${item.price}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center relative z-10">
          <Button
            action="Enquire now"
            type="button"
            className="bg-[#2C3941] text-white uppercase py-3 px-8 rounded-[18px] min-w-[223px] mt-6 "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
