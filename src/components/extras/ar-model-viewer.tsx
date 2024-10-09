"use client";
import React, { useEffect, useState } from "react";

// Import model-viewer styles
import { Button } from "../ui/button";
import { AArrowUpIcon } from "lucide-react";

const ARModelViewer = ({
  url,
  arButton,
  ...props
}: {
  url: string;
  arButton?: boolean;
  [key: string]: any;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const loadModelViewer = async () => {
      if (typeof window !== "undefined") {
        // Dynamically import the model-viewer library
        await import("@google/model-viewer/dist/model-viewer");
        setIsMounted(true);
      }
    };

    loadModelViewer();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {isMounted && (
        <>
          {/* @ts-ignore */}
          <model-viewer
            src={url}
            {...props}
            // @ts-ignore
          >
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
            {/*@ts-ignore  */}
          </model-viewer>
          <br />
        </>
      )}
    </div>
  );
};

export default ARModelViewer;
