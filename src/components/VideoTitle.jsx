import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pl-14 pt-[20%] absolute w-screen aspect-video text-white bg-linear-to-r from-black to-transparent ">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-lg py-6 w-1/4">{overview}</p>
            <div className="flex">
                <button className="bg-white text-black px-8 py-2 m-2 rounded-md cursor-pointer hover:opacity-80">
                    ▶️ Play
                </button>

                <button className="bg-white text-black px-8 py-2 m-2 rounded-md cursor-pointer hover:opacity-80">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
