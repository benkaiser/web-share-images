import React from 'react';
import html2canvas from 'html2canvas';

interface IWebShareHTMLProps {}

async function onShare(shareTarget: React.RefObject<HTMLDivElement>) {
  if (!shareTarget.current) {
    return;
  }
  const canvas = await html2canvas(shareTarget.current);
  const dataUrl = canvas.toDataURL();
  const blob = await (await fetch(dataUrl)).blob();
  const filesArray: File[] = [new File([blob], 'htmldiv.png', { type: blob.type, lastModified: new Date().getTime() })];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData as any).then(() => {
    console.log('Shared successfully');
  });
}


function WebShareHTML({}: IWebShareHTMLProps): JSX.Element {
  const shareTarget = React.useRef(null);
  React.useEffect(() => {
  });

  return (
    <div className="exampleContents">
      <h1>Sharing HTML contents</h1>
      <div ref={shareTarget} className='divToShare'>
        <h4>This is the div that will end up in the shared image</h4>
        <table>
          <thead><tr><th>Column 1</th><th>Column 2</th></tr></thead>
          <tbody><tr><th>Data 1</th><th>Data 2</th></tr></tbody>
        </table>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <img src="nacho.jpg" alt='Nacho Libre saying "take it easy"' width="200" />
      </div>
      <button className="pure-button pure-button-primary share-button" onClick={onShare.bind(onShare, shareTarget)}>Share Image</button>
      <a href="https://github.com/benkaiser/web-share-images/blob/master/src/examples/WebShareHTML.tsx" className="pure-button share-button">View Code</a>
    </div>
  );
}

export default WebShareHTML;
