import React, { useRef } from 'react';
// @ts-ignore
import { default as CanvasAnimation } from './CanvasAnimation';

interface IWebShareCanvasProps {}

async function onShare(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const dataUrl = canvasRef.current!.toDataURL();
  const blob = await (await fetch(dataUrl)).blob();
  const filesArray: File[] = [new File([blob], 'animation.png', { type: blob.type, lastModified: new Date().getTime() })];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData as any).then(() => {
    console.log('Shared successfully');
  })
}

const width = Math.min(window.innerWidth, 400);
const height = Math.min(window.innerHeight, 400);

function WebShareCanvas({}: IWebShareCanvasProps): JSX.Element {
  const canvasRef = useRef(null);

  React.useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    CanvasAnimation(canvas, width, height);
  });

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
      <button onClick={onShare.bind(onShare, canvasRef)}>Share Image</button>
    </div>
  );
}

export default WebShareCanvas;
