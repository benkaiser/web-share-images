import React from "../../snowpack/pkg/react.js";
import html2canvas from "../../snowpack/pkg/html2canvas.js";
async function onShare(shareTarget) {
  if (!shareTarget.current) {
    return;
  }
  const canvas = await html2canvas(shareTarget.current);
  const dataUrl = canvas.toDataURL();
  const blob = await (await fetch(dataUrl)).blob();
  const filesArray = [new File([blob], "htmldiv.png", {type: blob.type, lastModified: new Date().getTime()})];
  const shareData = {
    files: filesArray
  };
  navigator.share(shareData).then(() => {
    console.log("Shared successfully");
  });
}
function WebShareHTML({}) {
  const shareTarget = React.useRef(null);
  React.useEffect(() => {
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "exampleContents"
  }, /* @__PURE__ */ React.createElement("h1", null, "Sharing HTML contents"), /* @__PURE__ */ React.createElement("div", {
    ref: shareTarget,
    className: "divToShare"
  }, /* @__PURE__ */ React.createElement("h4", null, "This is the div that will end up in the shared image"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Column 1"), /* @__PURE__ */ React.createElement("th", null, "Column 2"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Data 1"), /* @__PURE__ */ React.createElement("th", null, "Data 2")))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Item 1"), /* @__PURE__ */ React.createElement("li", null, "Item 2")), /* @__PURE__ */ React.createElement("img", {
    src: "nacho.jpg",
    alt: 'Nacho Libre saying "take it easy"',
    width: "200"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "pure-button pure-button-primary share-button",
    onClick: onShare.bind(onShare, shareTarget)
  }, "Share Image"), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/benkaiser/web-share-images/blob/master/src/examples/WebShareHTML.tsx",
    className: "pure-button share-button"
  }, "View Code"));
}
export default WebShareHTML;
