import React, { useEffect, useState } from "react";
import { getMenuList } from "../apis/lunch";

type response = {
  nation: string;
  food: string;
  majorClass: string;
};

const Lunch = () => {
  const [data, setData] = useState<response>({
    nation: "",
    food: "",
    majorClass: "",
  });
  const getMenuListCall = async () => {
    const result = await getMenuList();
    setData(result);
  };
  useEffect(() => {
    getMenuListCall();
  }, []);

  return <h1>{data?.food}</h1>;
};

export default Lunch;
