import React, { useEffect, useRef } from "react";
import useOnClickOutside from "@/hooks/useClickOutside";
import useKeyPress from "@/hooks/useKeyPress";
import classnames from "classnames";

const Modal = ({ open, setOpen, title, children, bodyClassName }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setOpen(false));
  const isEscPress = useKeyPress("Escape");

  useEffect(() => {
    isEscPress && setOpen(false);
  }, [isEscPress, setOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    open && (
      <>
        <div className="fixed inset-0 z-[100] flex items-center justify-center max-h-screen overflow-hidden outline-none focus:outline-none p-5">
          <div ref={ref} className="relative w-auto max-w-3xl mx-auto my-6 overflow-hidden">
            <div
              className={classnames(
                "relative flex flex-col w-full overflow-hidden bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
                bodyClassName
              )}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-solid rounded-t">
                <h3 className="text-xl font-semibold">{title}</h3>
                <button className="text-2xl" onClick={() => setOpen(false)}>
                  x
                </button>
              </div>
              <div className="relative flex-auto px-6 mt-4 mb-6 overflow-scroll">{children}</div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-[90] bg-black opacity-25"></div>
      </>
    )
  );
};

export default Modal;
