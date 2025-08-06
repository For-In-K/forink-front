import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-white/40">
      <div className="bg-primary relative w-lg rounded-lg p-6 shadow-lg">
        <button
          className="transition-color absolute top-2 right-2 flex text-white hover:text-sky-300"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
