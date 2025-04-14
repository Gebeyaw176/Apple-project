import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import items from "./file/data";
import "./Youtubevideos.css"
const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key= AIzaSyBYcqa8wdl8Z9LdAYSdTdVSU2aL-FO9jB0`;
function YoutubeVideos() {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setvideos(data.items);
      })
      .catch(() => {});
  }, []);

  console.log(videos);

  return (
    <section className="allvideowrapper">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper video-title-wrapper">
              Latest video
            </div>
          </div>
          {videos?.map((singlevideo, i) => {
            let vidId = singlevideo.id.videoId;
            let videolink = `https://www.youtube.com/watch?v=${vidId}`;

            return (
              <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                <div className="single-video-wrapper">
                  <div className="video-thumbnail">
                    <a href={videolink} targrts="_blank">
                      <img
                        src={singlevideo.snippet.thumbnails.high.url}
                        alt="thumbnail"
                      />
                    </a>
                  </div>
               
                <div className="video-info-wrapper">
                  <div className="video-title">
                    <a href={videolink} target="_blank">
                      {singlevideo.snippet.title}
                    </a>
                  </div>

                  <div className="video-description">
                    {singlevideo.snippet.description}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default YoutubeVideos;
