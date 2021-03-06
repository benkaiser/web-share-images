import React from 'react';

interface IWebShareImageProps {}

async function onShare() {
  const response = await fetch('nacho.jpg');
  const arrayBuffer = await response.arrayBuffer();
  var blob = new Blob([arrayBuffer], { type: "image/jpeg" });
  const filesArray: File[] = [new File([blob], 'meme.jpg', { type: blob.type, lastModified: new Date().getTime() })];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData as any).then(() => {
    console.log('Shared successfully');
  })
}

function WebShareImage({}: IWebShareImageProps): JSX.Element {
  return (
    <div>
      <img src="nacho.jpg" alt='Nacho Libre saying "take it easy"' />
      <button onClick={onShare}>Share Image</button>
    </div>
  );
}

export default WebShareImage;
