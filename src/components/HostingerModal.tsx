import React from 'react';
import { X, Server, CheckCircle2, Terminal, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HostingerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerModal: React.FC<HostingerModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      id="hostinger-guide-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border animate-in fade-in zoom-in-95 duration-200 ${
          isDark
            ? 'bg-[#0B1424] border-white/15 text-white'
            : 'bg-white border-[#EFE8DF] text-[#202A33]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-[#FAF7F2] hover:bg-[#EFE8DF] text-[#0B2239]'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0B2239] text-white flex items-center justify-center">
            <Server className="w-5 h-5 text-[#D96F58]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl">
              Deployment Guide (Netlify & Hostinger)
            </h3>
            <p className="text-xs opacity-75">
              Production deployment instructions for Nasir Real Estate
            </p>
          </div>
        </div>

        <div className="space-y-4 my-6 text-xs sm:text-sm">
          {/* Step 1 */}
          <div
            className={`p-4 rounded-2xl border flex gap-3.5 items-start ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-[#0B2239] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </div>
            <div>
              <strong className="font-display text-sm block mb-1">
                Build the Production Assets
              </strong>
              <p className="opacity-80 mb-2">
                Run the build command. This compiles all TypeScript, React, and styles into a clean static bundle:
              </p>
              <div className="bg-[#050912] text-emerald-400 font-mono text-xs p-2.5 rounded-lg flex items-center gap-2 border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-[#D96F58]" />
                <span>npm run build</span>
              </div>
              <p className="text-[11px] opacity-75 mt-1.5">
                Generates a self-contained <code className="font-mono font-bold">dist/</code> directory.
              </p>
            </div>
          </div>

          {/* Step 2: Netlify */}
          <div
            className={`p-4 rounded-2xl border flex gap-3.5 items-start ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-[#0B2239] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </div>
            <div>
              <strong className="font-display text-sm block mb-1 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#D96F58]" /> Netlify (Recommended 1-Click)
              </strong>
              <p className="opacity-80 mb-1">
                Drag the generated <code className="font-mono font-bold">dist/</code> folder into <strong>app.netlify.com/drop</strong> or connect GitHub with build command <code className="font-mono">npm run build</code> and publish dir <code className="font-mono">dist</code>.
              </p>
              <p className="text-[11px] text-emerald-500 font-semibold">
                `netlify.toml` and `public/_redirects` are already configured for clean SPA routing!
              </p>
            </div>
          </div>

          {/* Step 3: Hostinger */}
          <div
            className={`p-4 rounded-2xl border flex gap-3.5 items-start ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-[#0B2239] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </div>
            <div>
              <strong className="font-display text-sm block mb-1">
                Hostinger Upload
              </strong>
              <p className="opacity-80 mb-2">
                In Hostinger File Manager, open <code className="font-mono font-bold">public_html/</code> and upload the contents of <code className="font-mono font-bold">dist/</code>.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-500 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero backend server needed — static files load at lightning speed!</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
          <span className="text-xs opacity-70">
            Static SPA • 100% Netlify & Hostinger Ready
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#D96F58] hover:bg-[#E27A61] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
