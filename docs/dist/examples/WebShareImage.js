import React from "../../snowpack/pkg/react.js";
async function onShare() {
  const response = await fetch("nacho.jpg");
  const arrayBuffer = await response.arrayBuffer();
  var blob = new Blob([arrayBuffer], {type: "image/jpeg"});
  const filesArray = [new File([blob], "meme.jpg", {type: blob.type, lastModified: new Date().getTime()})];
  const shareData = {
    files: filesArray
  };
  navigator.share(shareData).then(() => {
    console.log("Shared successfully");
  });
}
function WebShareImage({}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "exampleContents"
  }, /* @__PURE__ */ React.createElement("h1", null, "Sharing an Image"), /* @__PURE__ */ React.createElement("img", {
    src: "nacho.jpg",
    alt: 'Nacho Libre saying "take it easy"'
  }), /* @__PURE__ */ React.createElement("button", {
    className: "pure-button pure-button-primary share-button",
    onClick: onShare
  }, "Share Image"));
}
export default WebShareImage;
