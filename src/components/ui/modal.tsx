"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-4xl",
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Sin AnimatePresence: la entrada se anima con CSS puro (.animate-modal-in /
  // .animate-backdrop-in en globals.css) y la salida es instantánea. Así el
  // modal no arrastra framer-motion al bundle y funciona sin JS intermedio.
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-canvas/80 backdrop-blur-md animate-backdrop-in"
          />

          {/* Modal Content */}
          <div
            className={`relative w-full ${maxWidth} bg-surface border border-line rounded-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col animate-modal-in`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-surface sticky top-0 z-20">
              <h3 className="text-xl font-semibold text-ink tracking-tight">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 text-ash hover:text-ink rounded-lg hover:bg-surface-2 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-ash">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
