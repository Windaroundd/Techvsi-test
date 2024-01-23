import React from "react";
import Card from "../../components/Card/Card";
import { fakePaintData } from "../../apis/fakeData";

const Home = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="block wrapper lg:flex justify-center ">
        {fakePaintData.map((item) => {
          return <Card key={item.starting_price} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
