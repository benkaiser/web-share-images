import React from "../../snowpack/pkg/react.js";
async function onShare() {
  const response = await fetch("nacho.jpg");
  const blob = await response.blob();
  const filesArray = [new File([blob], "meme.jpg", {type: "image/jpeg", lastModified: new Date().getTime()})];
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
  }, "Share Image"), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/benkaiser/web-share-images/blob/master/src/examples/WebShareImage.tsx",
    className: "pure-button share-button"
  }, "View Code"));
}
export default WebShareImage;
