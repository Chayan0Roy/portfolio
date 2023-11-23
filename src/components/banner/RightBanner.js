import React from 'react'
import bannerImg from "../../assets/images/HomeImg.png";

const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <img
                className="w-3/4 h-3/4 rounded-full z-10"
                src={bannerImg}
                alt="bannerImg"
            />
        </div>
    );
}

export default RightBanner