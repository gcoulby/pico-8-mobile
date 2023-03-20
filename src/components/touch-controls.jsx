import React, { useState, useEffect } from "react";
import TouchButton from "./touch-button";

function TouchControls(props) {
  return (
    <>
      <div id="touch_controls_gfx">
        <div id="controls_right_panel">
          <TouchButton pressButton={props.picoButton} releaseButton={() => {}} label="Pico" type="pico" />
          <TouchButton pressButton={props.pressButton} releaseButton={props.releaseButton} label="Start" type="pill" bit={64} />
          <TouchButton pressButton={props.pressButton} releaseButton={props.releaseButton} label="X" type="round" bit={32} />
          <TouchButton pressButton={props.pressButton} releaseButton={props.releaseButton} label="O" type="round" bit={16} />
        </div>
        <div id="controls_left_panel">
          <TouchButton pressButton={props.pressButton} releaseButton={props.releaseButton} label="Down" type="arrow" bit={8} />
          <TouchButton pressButton={props.pressButton} releaseButton={props.releaseButton} label="Up" type="arrow" bit={4} />
          <TouchButton pressButton={props.pressButton} releaseButton={props.releaseButton} label="Left" type="arrow" bit={1} />
          <TouchButton pressButton={props.pressButton} releaseButton={props.releaseButton} label="Right" type="arrow" bit={2} />
        </div>
      </div>
    </>
  );
}

export default TouchControls;
