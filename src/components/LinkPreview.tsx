import React, { useEffect, useState } from "react";
import { encode } from "qss";

interface LinkPreviewProps {
  url: string;
  width?: number;
  height?: number;
}

export const LinkPreview: React.FC<LinkPreviewProps> = ({
  url,
  width = 300,
  height = 200,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });

    const previewUrl = `https://api.microlink.io/?${params}`;
    setPreview(previewUrl);
  }, [url, width, height]);

  return (
    <div className="relative">
      {preview ? (
        <img
          src={preview}
          alt="Website Preview"
          width={width}
          height={height}
          className="rounded-md border border-zinc-200 dark:border-zinc-800"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-md">
          Loading preview...
        </div>
      )}
    </div>
  );
};
