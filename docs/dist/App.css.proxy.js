// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".exampleContents {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  padding: 0 20px;\r\n}\r\n\r\n.sidebar {\r\n  margin-top: 20px;\r\n}\r\n\r\n.share-button {\r\n  margin-top: 20px;\r\n}\r\n\r\n.divToShare {\r\n  border: 1px solid #666;\r\n  background-color: #eee;\r\n}\r\n\r\n.divToShare table {\r\n  border-collapse: collapse;\r\n}\r\n\r\n.divToShare th, .divToShare td {\r\n  border: 1px solid #444;\r\n  padding: 4px;\r\n}\r\n\r\n.pure-g {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .pure-g {\r\n    width: 750px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .pure-g {\r\n    width: 970px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .pure-g {\r\n    width: 1170px;\r\n  }\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}