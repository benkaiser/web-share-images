import React, {useRef} from "../../snowpack/pkg/react.js";
import {default as CanvasAnimation} from "./CanvasAnimation.js";
async function onShare(canvasRef) {
  const dataUrl = canvasRef.current.toDataURL();
  const blob = await (await fetch(dataUrl)).blob();
  const filesArray = [new File([blob], "animation.png", {type: blob.type, lastModified: new Date().getTime()})];
  const shareData = {
    files: filesArray
  };
  navigator.share(shareData).then(() => {
    console.log("Shared successfully");
  });
}
const width = Math.min(window.innerWidth, 400);
const height = Math.min(window.innerHeight, 400);
function WebShareCanvas({}) {
  const canvasRef = useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    CanvasAnimation(canvas, width, height);
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "exampleContents"
  }, /* @__PURE__ */ React.createElement("h1", null, "Sharing a Canvas"), /* @__PURE__ */ React.createElement("canvas", {
    ref: canvasRef,
    width,
    height
  }), /* @__PURE__ */ React.createElement("button", {
    className: "pure-button pure-button-primary share-button",
    onClick: onShare.bind(onShare, canvasRef)
  }, "Share Image"), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/benkaiser/web-share-images/blob/master/src/examples/WebShareCanvas.tsx",
    className: "pure-button share-button"
  }, "View Code"));
}
export default WebShareCanvas;
