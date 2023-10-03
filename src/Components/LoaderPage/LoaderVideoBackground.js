import React from "react";
const LoaderVideoBackground = () => {


  return (
<div className="w-[100%] overflow-x-hidden bg-gradient-to-r from-black h-screen">
 <iframe 
 className="w-full aspect-video" style={{marginTop:"-30px"}} 
 src="https://www.youtube.com/embed/EKSAdNj6xSk?&autoplay=1&mute=1"
 title="LOADING EFFECT HUD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



</div>
  );
};

export default LoaderVideoBackground;
