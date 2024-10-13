"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProductInfoPortal({ children, isOpen, position }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="absolute bg-white p-4 border-t border-gray-200 shadow-red-400 shadow-xl rounded-b-lg z-50"
      style={{
        top: (position?.bottom || 0) - 10,
        left: position?.left || 0,
        width: position?.width || "100%",
      }}
    >
      {children}
    </div>,
    document.body
  );
}
