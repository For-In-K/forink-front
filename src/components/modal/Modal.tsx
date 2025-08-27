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
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="relative w-md rounded-lg border border-zinc-50 bg-white p-6 shadow-2xl">
        <button
          className="transition-color absolute top-4 right-4 flex text-zinc-400 hover:text-zinc-500"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
