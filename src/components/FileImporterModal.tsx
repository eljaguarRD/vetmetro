import React, { useState, useRef } from 'react';
import { X, Upload, Folder, FileText, CheckCircle2, AlertCircle, Eye, RefreshCw, FileCode, Sparkles } from 'lucide-react';

interface FileImporterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCustomContentApplied?: (content: string) => void;
}

interface LoadedFile {
  name: string;
  size: number;
  type: string;
  content?: string;
}

export const FileImporterModal: React.FC<FileImporterModalProps> = ({
  isOpen,
  onClose,
  onCustomContentApplied
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState<LoadedFile[]>([]);
  const [selectedFileContent, setSelectedFileContent] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    const newFiles: LoadedFile[] = [];
    const readers: Promise<void>[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const fileObj: LoadedFile = {
        name: file.name,
        size: file.size,
        type: file.type || 'text/plain'
      };

      if (file.name.match(/\.(html|htm|css|js|ts|tsx|json|txt|md)$/i)) {
        const p = new Promise<void>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            fileObj.content = e.target?.result as string;
            resolve();
          };
          reader.readAsText(file);
        });
        readers.push(p);
      }

      newFiles.push(fileObj);
    }

    Promise.all(readers).then(() => {
      setFiles((prev) => [...prev, ...newFiles]);
      if (newFiles.length > 0 && newFiles[0].content) {
        setSelectedFileContent(newFiles[0].content);
        setSelectedFileName(newFiles[0].name);
      }
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Folder className="w-5 h-5 text-teal-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Sincronizador de Archivos de Proyecto
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Importar Archivos de `vet-metropolitana`
            </h2>
            <p className="text-xs text-slate-300 mt-1 font-mono">
              Ruta local de origen: C:\Users\howar\Desktop\APPS\LANDING PAGES\vet-metropolitana
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Note on Cloud Sandbox Security */}
        <div className="bg-teal-50 border-b border-teal-200/80 p-4 text-xs text-teal-950 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">
              ¡Hemos activado la landing page optimizada para conversión de citas de Veterinaria Metropolitana!
            </p>
            <p className="text-teal-900/90 leading-relaxed">
              Por razones de seguridad del navegador, las aplicaciones web en la nube no pueden leer automáticamente carpetas locales de Windows (<code className="bg-teal-100/80 px-1 py-0.5 rounded font-mono text-[11px]">C:\Users\...</code>) sin permiso del usuario. Si tienes archivos específicos (HTML, CSS, imágenes o textos) dentro de esa carpeta, puedes arrastrarlos aquí para visualizarlos e incorporarlos.
            </p>
          </div>
        </div>

        {/* Dropzone */}
        <div className="p-5 sm:p-6 space-y-5">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
              dragOver
                ? 'border-teal-500 bg-teal-50/50 scale-[0.99]'
                : 'border-slate-300 hover:border-teal-400 bg-slate-50/50 hover:bg-slate-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-3">
              <Upload className="w-7 h-7" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-800">
              Arrastra tus archivos de <code className="text-teal-700">vet-metropolitana</code> aquí
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              o haz clic para explorar en tu equipo (HTML, CSS, JS, imágenes, SVG o texto)
            </p>
          </div>

          {/* Loaded files list */}
          {files.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Archivos cargados ({files.length}):
                </span>
                <button
                  onClick={() => {
                    setFiles([]);
                    setSelectedFileContent(null);
                    setSelectedFileName(null);
                  }}
                  className="text-xs text-rose-600 hover:underline font-semibold cursor-pointer"
                >
                  Limpiar lista
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                {files.map((file, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (file.content) {
                        setSelectedFileContent(file.content);
                        setSelectedFileName(file.name);
                      }
                    }}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                      selectedFileName === file.name
                        ? 'bg-teal-50 border-teal-500 text-teal-950 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileCode className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="truncate">{file.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono ml-2 shrink-0">
                      {formatBytes(file.size)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Preview of selected text file */}
              {selectedFileContent && (
                <div className="mt-4 border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-700 flex items-center justify-between border-b border-slate-200">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-teal-600" />
                      Vista previa de contenido: {selectedFileName}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">Texto plano</span>
                  </div>
                  <pre className="p-3 text-[11px] font-mono text-slate-800 bg-slate-50 max-h-40 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                    {selectedFileContent.slice(0, 3000)}
                    {selectedFileContent.length > 3000 ? '\n... (contenido truncado)' : ''}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Guidance on conversion optimization */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-1.5">
            <span className="font-bold text-slate-900 block">
              Estrategia de Optimización de Citas implementada:
            </span>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>Formulario de reserva instantáneo con selector de mascotas y horarios en tiempo real.</li>
              <li>Botón de confirmación directa a WhatsApp para asegurar la asistencia del paciente.</li>
              <li>Triaje de síntomas para orientar a dueños indecisos y evitar pérdidas de conversión.</li>
              <li>Garantía de puntualidad (cero esperas) y transparencia de precios con cotizador dinámico.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Continuar con la Página Web
          </button>
        </div>

      </div>
    </div>
  );
};
