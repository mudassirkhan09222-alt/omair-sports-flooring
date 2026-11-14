"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X, AlertCircle, CheckCircle2, ImageIcon, Plus } from "lucide-react";
import type { UploadedImage } from "@/lib/useImageUpload";

type Props = {
  images: UploadedImage[];
  onFiles: (files: FileList | File[]) => void;
  onRemove: (id: string) => void;
  isUploading: boolean;
};

export default function ImageUploader({ images, onFiles, onRemove, isUploading }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDrag(false);
    if (e.dataTransfer.files.length) onFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      onFiles(e.target.files);
      e.target.value = ""; // allow re-selecting same file
    }
  };

  const done  = images.filter(i => i.status === "done").length;
  const total = images.length;

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      <div
        onClick={() => fileRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={handleDrop}
        className={`relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 flex flex-col items-center justify-center gap-2 py-8 px-4 text-center
          ${drag ? "border-blue-500 bg-blue-50 scale-[1.01]" : "border-gray-200 hover:border-blue-400 bg-gray-50 hover:bg-blue-50/40"}`}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          onChange={handleChange}
          className="hidden"
        />
        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
          <Upload size={22} className="text-blue-500" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">
            Click to upload <span className="text-blue-600">images</span>
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            JPG, PNG, WEBP, GIF — max 5MB each — multiple select allowed
          </p>
        </div>
        {isUploading && (
          <div className="flex items-center gap-2 mt-1">
            <div className="w-4 h-4 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <span className="text-xs text-blue-600 font-semibold">
              Uploading {done}/{total}...
            </span>
          </div>
        )}
      </div>

      {/* Preview grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((img, idx) => (
            <div key={img.id}
              className={`relative group rounded-xl overflow-hidden border-2 transition-all aspect-video
                ${img.status === "done"    ? "border-green-200 shadow-sm"
                : img.status === "error"   ? "border-red-200 bg-red-50"
                : "border-blue-200 bg-blue-50"}`}
            >
              {/* Cover image */}
              {img.status === "done" && img.publicUrl && (
                <>
                  <Image
                    src={img.publicUrl}
                    alt={`Image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px)50vw,33vw"
                  />
                  {/* Cover badge on first image */}
                  {idx === 0 && (
                    <span className="absolute top-1.5 left-1.5 bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                      COVER
                    </span>
                  )}
                  {/* Remove on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => onRemove(img.id)}
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X size={14} className="text-white" />
                    </button>
                  </div>
                  {/* Done tick */}
                  <CheckCircle2 size={14} className="absolute bottom-1.5 right-1.5 text-green-400 drop-shadow" />
                </>
              )}

              {/* Uploading state */}
              {img.status === "uploading" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
                  <span className="text-[10px] text-blue-600 font-semibold truncate max-w-full px-2">
                    {img.fileName.length > 16 ? img.fileName.slice(0, 14) + "…" : img.fileName}
                  </span>
                </div>
              )}

              {/* Error state */}
              {img.status === "error" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
                  <AlertCircle size={18} className="text-red-500" />
                  <p className="text-[10px] text-red-500 text-center leading-tight">{img.error}</p>
                  <button
                    type="button"
                    onClick={() => onRemove(img.id)}
                    className="text-[10px] text-red-400 hover:text-red-600 underline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Add more tile */}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="aspect-video rounded-xl border-2 border-dashed border-gray-200 hover:border-blue-400 bg-gray-50 hover:bg-blue-50/40 flex flex-col items-center justify-center gap-1 transition-all"
          >
            <Plus size={18} className="text-gray-400" />
            <span className="text-[10px] text-gray-400 font-semibold">Add more</span>
          </button>
        </div>
      )}

      {/* Summary */}
      {images.length > 0 && (
        <p className="text-xs text-gray-400 flex items-center gap-1.5">
          <ImageIcon size={11} />
          {done} of {total} image{total !== 1 ? "s" : ""} ready
          {done > 0 && " · First image will be used as cover"}
        </p>
      )}
    </div>
  );
}
