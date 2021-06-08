import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import Loading from "../utils/loading/Loading";
import { Link, useHistory, useParams } from "react-router-dom";

function Video() {
  return (
    <div className="video">
      <h1 className="video__title">
        На этой странице вы можете посмотреть видео про животных
      </h1>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/cnUj07GpVdU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/zFdyPxNmoTY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/ecVd0htwsDw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/YQQ39DsKp44"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/ZylYsZ4qKyU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/H3Gi3OiGTxo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/il7KVNZ8GDs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/9taj4TuR3VA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/VqyrG5JAF4w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video__cadr"
        src="https://www.youtube.com/embed/ihjL3zlfSRE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
