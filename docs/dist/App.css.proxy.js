// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".exampleContents {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0 20px;\n}\n\n.sidebar {\n  margin-top: 20px;\n}\n\n.share-button {\n  margin-top: 20px;\n}\n\n.divToShare {\n  border: 1px solid #666;\n  background-color: #eee;\n}\n\n.divToShare table {\n  border-collapse: collapse;\n}\n\n.divToShare th, .divToShare td {\n  border: 1px solid #444;\n  padding: 4px;\n}\n\n.pure-g {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .pure-g {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .pure-g {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .pure-g {\n    width: 1170px;\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}