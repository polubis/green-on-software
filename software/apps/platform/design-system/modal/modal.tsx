import type { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }) {
  return (
    <>
      <div
        className="fixed w-screen h-screen top-0 left-0 bg-black-900"
        onClick={onClose}
      />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white-100 p-12 rounded-sm shadow-lg">
        {children}
      </div>
    </>
  );
}

export type { ModalProps };

export { Modal };
