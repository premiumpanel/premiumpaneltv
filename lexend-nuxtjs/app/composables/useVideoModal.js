
export const  useVideoModal = () => {
  const playVideo = (value) => {
    const videoOverlay = document.querySelector("#video-overlay");
    const iframeElement = document.createElement("iframe");
  
    iframeElement.setAttribute("src", value);
    iframeElement.style.maxWidth = "820px";
    iframeElement.style.maxHeight = "460px";
  
    videoOverlay?.classList.add("open");
    videoOverlay?.appendChild(iframeElement);
  };
  
  const closeVideo = () => {
    const openVideoOverlay = document.querySelector("#video-overlay.open");
    const iframeElement = document.querySelector("#video-overlay.open iframe");
  
    openVideoOverlay?.classList.remove("open");
    iframeElement?.remove();
  };
  return {
    playVideo,
    closeVideo
  }
}