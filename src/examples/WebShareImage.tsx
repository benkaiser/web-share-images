import React from 'react';

interface IWebShareImageProps {}

async function onShare() {
  const response = await fetch('nacho.jpg');
  const blob = await response.blob();
  const filesArray: File[] = [new File([blob], 'meme.jpg', { type: "image/jpeg", lastModified: new Date().getTime() })];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData as any).then(() => {
    console.log('Shared successfully');
  })
}

function WebShareImage({}: IWebShareImageProps): JSX.Element {
  return (
    <div className="exampleContents">
      <h1>Sharing an Image</h1>
      <img src="nacho.jpg" alt='Nacho Libre saying "take it easy"' />
      <button className="pure-button pure-button-primary share-button" onClick={onShare}>Share Image</button>
      <a href="https://github.com/benkaiser/web-share-images/blob/master/src/examples/WebShareImage.tsx" className="pure-button share-button">View Code</a>
    </div>
  );
}

export default WebShareImage;
