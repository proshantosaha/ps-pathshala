"use client";
<<<<<<< HEAD

import { useMemo } from "react";
import dynamic from "next/dynamic";

export const Editor = ({ onChange, value }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), {
      ssr: false,
    }),
    []
  );

  return (
    <div className="bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
=======
import { useMemo } from "react";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";



export const Editor = ({ onChange, value }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};
>>>>>>> e91ba32ab3eff57e67522236bc9ef6997d91c97e
