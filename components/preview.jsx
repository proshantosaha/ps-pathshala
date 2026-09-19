"use client";
import { useMemo } from "react";

import dynamic from "next/dynamic";
<<<<<<< HEAD
=======
import "react-quill/dist/quill.bubble.css";
>>>>>>> e91ba32ab3eff57e67522236bc9ef6997d91c97e

export const Preview = ({ value }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return <ReactQuill theme="bubble" readOnly value={value} />;
};
