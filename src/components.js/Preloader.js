import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

/**
 * Preloader component to display a spinner while content is loading.
 * @param {Object} props - Component props.
 * @param {boolean} props.load - Whether to show the preloader.
 */
function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <Loader
        type="Audio" // Type of loader animation
        color="#goldenrod" // Color of the loader
        height={100} // Height of the loader
        width={100} // Width of the loader
      />
    </div>
  );
}

export default Preloader;
