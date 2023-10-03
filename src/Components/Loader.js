import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects-18";
const Loader = () => {
  return (
    <div className="absolute pt-[17%] px-12 text-white bg-gradient-to-r from-black  h-screen">
      <div className=" w-screen flex flex-wrap ">
        {Array(10)
          .fill("")
          .map(() => {
            return (
              <div className="mx-3">
                {" "}
                <ShimmerThumbnail height={130} width={210} />{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Loader;
