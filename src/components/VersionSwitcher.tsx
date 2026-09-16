import React from 'react';
import { Layers, Sparkles, Check, ChevronRight, Eye } from 'lucide-react';

interface VersionSwitcherProps {
  currentVersion: 'v1' | 'v2' | 'v3';
  onChangeVersion: (version: 'v1' | 'v2' | 'v3') => void;
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({
  currentVersion,
  onChangeVersion
}) => {
  return (
    <div className="sticky top-0 z-50 bg-stone-950 text-white border-b border-stone-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
        
        {/* Left: Indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-stone-400 font-medium">Comparador de Diseño:</span>
          <span className="font-bold text-white">
            {currentVersion === 'v3'
              ? 'Versión 3: Flagship Hospital & Concierge Care (Estándar Internacional)'
              : currentVersion === 'v2'
              ? 'Versión 2: Propuesta Boutique & Editorial'
              : 'Versión 1: Clínica Básica & Triaje'}
          </span>
        </div>

        {/* Right: Toggle Switcher */}
        <div className="flex items-center bg-stone-900 p-1 rounded-xl border border-stone-800 gap-1">
          <button
            onClick={() => onChangeVersion('v1')}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer flex items-center gap-1 ${
              currentVersion === 'v1'
                ? 'bg-stone-700 text-white shadow-xs'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            {currentVersion === 'v1' && <Check className="w-3 h-3" />}
            <span>V1</span>
          </button>

          <button
            onClick={() => onChangeVersion('v2')}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer flex items-center gap-1 ${
              currentVersion === 'v2'
                ? 'bg-stone-700 text-white shadow-xs'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            {currentVersion === 'v2' && <Check className="w-3 h-3" />}
            <span>V2</span>
          </button>

          <button
            onClick={() => onChangeVersion('v3')}
            className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer flex items-center gap-1.5 ${
              currentVersion === 'v3'
                ? 'bg-[#0D4740] text-white shadow-xs ring-1 ring-emerald-400/50'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            {currentVersion === 'v3' && <Check className="w-3 h-3 text-emerald-300" />}
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Versión 3 (Flagship Concierge)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
