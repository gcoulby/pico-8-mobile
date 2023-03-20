import React, { useState, useEffect } from "react";
function TouchButton(props) {
  const [diameter, setDiameter] = useState(window.innerWidth / 8);

  const handleResize = () => {
    var newDiameter = window.innerWidth / 6 < 100 ? window.innerWidth / 6 : 100;
    setDiameter(newDiameter);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const getButtonGraphic = () => {
    switch (props.label) {
      case "O":
        return (
          <svg
            className="button-graphic"
            width="100%"
            height="100%"
            viewBox="0 0 192 192"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, width: diameter / 3 }}
          >
            <rect id="Artboard1" x="0" y="0" width="192" height="192" style={{ fill: "none" }} />
            <path d="M192,0l-192,0l0,192l192,0l0,-192Zm-64,64l-64,0l0,64l64,-0l-0,-64Z" />
          </svg>
        );
      case "X":
        return (
          <svg
            className="button-graphic"
            width="100%"
            height="100%"
            viewBox="0 0 192 192"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, width: diameter / 3 }}
          >
            <rect id="Artboard2" x="0" y="0" width="192" height="192" style={{ fill: "none" }} />
            <g id="Artboard21">
              <rect x="0" y="0" width="64" height="64" />
              <rect x="0" y="128" width="64" height="64" />
              <rect x="64" y="64" width="64" height="64" />
              <rect x="128" y="0" width="64" height="64" />
              <rect x="128" y="128" width="64" height="64" />
            </g>
          </svg>
        );
      case "Start":
        return <></>;
      case "Up":
      case "Down":
      case "Left":
      case "Right":
        return (
          <svg
            className="button-graphic"
            width="100%"
            height="100%"
            viewBox="0 0 192 192"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, width: diameter / 3 }}
          >
            <rect id="Artboard3" x="0" y="0" width="192" height="192" style={{ fill: "none" }} />
            <rect x="64" y="0" width="64" height="80" />
            <rect x="0" y="64" width="192" height="128" />
          </svg>
        );
      case "Pico":
        return (
          <svg
            className="button-graphic-pico"
            width="100%"
            height="100%"
            viewBox="0 0 192 192"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, width: diameter / 3 }}
          >
            <rect id="Artboard4" x="0" y="0" width="192" height="192" style={{ fill: "none" }} />
            <rect x="38.4" y="38.4" width="115.2" height="115.2" style={{ fill: "#fff" }} />
            <rect x="76.8" y="0" width="38.4" height="38.4" style={{ fill: "#ff004d" }} />
            <rect x="115.2" y="38.4" width="38.4" height="38.4" style={{ fill: "#fca" }} />
            <rect x="153.6" y="76.8" width="38.4" height="38.4" style={{ fill: "#ff77a8" }} />
            <rect x="115.2" y="115.2" width="38.4" height="38.4" style={{ fill: "#83769c" }} />
            <rect x="76.8" y="153.6" width="38.4" height="38.4" style={{ fill: "#29adff" }} />
            <rect x="38.4" y="115.2" width="38.4" height="38.4" style={{ fill: "#00e436" }} />
            <rect x="0" y="76.8" width="38.4" height="38.4" style={{ fill: "#ffec27" }} />
            <rect x="38.4" y="38.4" width="38.4" height="38.4" style={{ fill: "#ffa300" }} />
          </svg>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <button
        className={`${props.type}-button  button-${props.label}`}
        onTouchStart={() => props.pressButton(props.bit)}
        onMouseDown={() => props.pressButton(props.bit)}
        onTouchEnd={() => props.releaseButton(props.bit)}
        onMouseUp={() => props.releaseButton(props.bit)}
        style={{ width: diameter, height: diameter }}
      >
        {getButtonGraphic()}
      </button>
    </>
  );
}

export default TouchButton;
