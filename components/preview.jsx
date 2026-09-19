"use client";
import { useMemo } from "react";

import dynamic from "next/dynamic";

export const Preview = ({ value }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return <ReactQuill theme="bubble" readOnly value={value} />;
};
