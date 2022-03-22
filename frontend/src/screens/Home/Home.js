import React, { useEffect, useRef } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { request } from "./HomeSlice";
import Section from "./components/section";

const Home = () => {
  const data = useSelector((state) => state.home.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(request());
  }, [dispatch]);

  if (!data?.data) return <div>loading..</div>;
  return data?.data.map((sectionInfo, index) => (
    <Section key={index} sectionInfo={sectionInfo} />
  ));
};

export default Home;
