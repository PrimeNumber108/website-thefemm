import { isString } from "@/utils";
import React from "react";

const TextLoader = ({ theme = "dark", content, style, loaderStyle }) => {
  return (
    <div className="loader-box" style={style}>
      <div className="mb-1">
        {isString(content) ? (
          <span className="text-label font-bold">{content}</span>
        ) : (
          content
        )}
      </div>
      <div
        className={
          theme !== "dark" ? 'loader-white-animate' : "loader-animate"
        }
        style={loaderStyle}
      />
    </div>
  );
};

export default TextLoader;
