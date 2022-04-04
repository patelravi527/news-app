import React from "react";
import spinnerLogo from "../spinner.gif";

export default function Spinner() {
  return (
    <>
      <div className="container mx-auto px-4 mt-4">
        <div className="flex justify-center items-center w-20 h-20 mx-auto">
          <img className="w-auto max-w-full" src={spinnerLogo} alt="spinner" />
        </div>
      </div>
    </>
  );
}
