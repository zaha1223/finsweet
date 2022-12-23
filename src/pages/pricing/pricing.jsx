import React from "react";
import { HeadPart } from "./components/head-part/head";
import { Cards } from "./components/cards/cards";
import { Questions } from "./components/questions/questions";

export const Pricing = () => {
  return(
    <>
     <div className="container-pricing">
        <HeadPart/>
        <Cards/>
        <Questions/>
      </div>
    </>
  )
};
