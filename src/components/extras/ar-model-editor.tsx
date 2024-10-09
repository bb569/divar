"use client";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { AArrowUpIcon } from "lucide-react";

const ARModelEditor = ({
  url,
  arButton,
  ...props
}: {
  url: string;
  arButton: boolean;
  [key: string]: any;
}) => {
  const modelViewerRef = useRef<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@google/model-viewer/dist/model-viewer").then(() =>
        setIsMounted(true)
      );
    }
  }, []);

  const changeColor = (color: string) => {
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      const [material] = modelViewer.model.materials;
      if (material) {
        // Set the base color using a CSS-style color string
        material.pbrMetallicRoughness.setBaseColorFactor(color);
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isMounted && (
        <>
          {/* @ts-ignore */}
          <model-viewer ref={modelViewerRef} src={url} {...props}>
            {arButton && (
              <Button
                size="lg"
                slot="ar-button"
                className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-primary hover:bg-primary-dark transition-all duration-300 ease-in-out shadow-md"
              >
                <AArrowUpIcon className="h-6 w-6" />
                <span>مشاهده در واقعیت افزوده</span>
              </Button>
            )}
            {/* @ts-ignore */}
          </model-viewer>
          <div className="mt-4">
            <button onClick={() => changeColor("#ff0000")}>Red</button>
            <button onClick={() => changeColor("#00ff00")}>Green</button>
            <button onClick={() => changeColor("#0000ff")}>Blue</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ARModelEditor;
