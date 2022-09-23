import React, { useRef, useState } from "react";
import IframeResizer from "iframe-resizer-react";

export const Frame = ({ url, index }) => {
  const iframeRef = useRef(null);
  const [messageData, setMessageData] = useState();

  const onResized = data => {
    console.log(data);
    setMessageData(data);
  };

  const onMessage = data => {
    console.log(data);
    setMessageData(data);
    iframeRef.current.sendMessage("Hello back from the parent page");
  };

  return (
    <>
      <IframeResizer
        id={`dashboard-frame-${index}`}
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        scrolling={true}
        autoResize={true}
        onMessage={onMessage}
        onResized={onResized}
        src={url}
        style={{ width: "1px", minWidth: "100%", minHeight: "2000px" }}
        resizeFrom="child"
      />
    </>
  );
};
