import React from 'react';
import { X, Server, CheckCircle2, ArrowRight, Terminal, FolderArchive, Globe } from 'lucide-react';

interface HostingerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerModal: React.FC<HostingerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="hostinger-guide-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#EFE8DF] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F8F4EF] hover:bg-[#EFE8DF] text-[#0B2239] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0B2239] text-white flex items-center justify-center">
            <Server className="w-5 h-5 text-[#D96F58]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-[#0B2239]">
              Hostinger Deployment Guide
            </h3>
            <p className="text-xs text-[#68717A]">
              Step-by-step instructions to deploy Nasir Real Estate on Hostinger
            </p>
          </div>
        </div>

        <div className="space-y-4 my-6 text-xs sm:text-sm text-[#202A33]">
          {/* Step 1 */}
          <div className="p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF] flex gap-3.5 items-start">
            <div className="w-6 h-6 rounded-full bg-[#0B2239] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </div>
            <div>
              <strong className="font-display text-sm text-[#0B2239] block mb-1">
                Build the Production Assets
              </strong>
              <p className="text-[#68717A] mb-2">
                Run the build command in your terminal. This bundles all TypeScript, React, and CSS code into clean static HTML, CSS, and JS:
              </p>
              <div className="bg-[#07182A] text-emerald-400 font-mono text-xs p-2.5 rounded-lg flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#D96F58]" />
                <span>npm run build</span>
              </div>
              <p className="text-[11px] text-[#68717A] mt-1.5">
                This will generate a self-contained <code className="font-mono font-bold text-[#0B2239]">dist/</code> directory.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF] flex gap-3.5 items-start">
            <div className="w-6 h-6 rounded-full bg-[#0B2239] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </div>
            <div>
              <strong className="font-display text-sm text-[#0B2239] block mb-1">
                Access Hostinger File Manager
              </strong>
              <p className="text-[#68717A] mb-1">
                Log in to your <strong>Hostinger hPanel</strong>, select your domain, and open <strong>File Manager</strong>.
              </p>
              <p className="text-[#68717A]">
                Navigate into your website's root folder: <code className="font-mono text-[#0B2239] font-bold">public_html/</code>
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF] flex gap-3.5 items-start">
            <div className="w-6 h-6 rounded-full bg-[#0B2239] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </div>
            <div>
              <strong className="font-display text-sm text-[#0B2239] block mb-1">
                Upload the contents of <code className="font-mono">dist/</code>
              </strong>
              <p className="text-[#68717A] mb-2">
                Zip or drag the files inside <code className="font-mono font-bold">dist/</code> (such as <code className="font-mono">index.html</code> and the <code className="font-mono">assets/</code> folder) directly into <code className="font-mono font-bold">public_html/</code>.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No Node.js daemon or database server required on Hostinger!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#EFE8DF]">
          <span className="text-xs text-[#68717A]">
            Static SPA • 100% compatible with Hostinger Premium & Business Web Hosting
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#0B2239] hover:bg-[#07182A] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
