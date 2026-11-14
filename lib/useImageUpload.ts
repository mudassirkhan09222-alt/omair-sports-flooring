"use client";
import { useState, useCallback } from "react";

export type UploadedImage = {
  id: string;
  publicUrl: string;
  status: "uploading" | "done" | "error";
  error?: string;
  fileName: string;
};

export function useImageUpload(initial: string[] = []) {
  const [images, setImages] = useState<UploadedImage[]>(
    initial.map(url => ({
      id: url,
      publicUrl: url,
      status: "done" as const,
      fileName: url.split("/").pop() || "image",
    }))
  );

  const uploadFiles = useCallback(async (files: FileList | File[]) => {
    const fileArr = Array.from(files);

    // Add uploading placeholders immediately
    const placeholders: UploadedImage[] = fileArr.map(f => ({
      id: `${Date.now()}-${Math.random()}`,
      publicUrl: "",
      status: "uploading" as const,
      fileName: f.name,
    }));
    setImages(prev => [...prev, ...placeholders]);

    // Upload all files in parallel
    await Promise.all(
      fileArr.map(async (file, i) => {
        const pid = placeholders[i].id;
        try {
          const fd = new FormData();
          fd.append("file", file);

          const res = await fetch("/api/admin/upload", {
            method: "POST",
            body: fd,
            // No Content-Type header — browser sets it with boundary automatically
          });

          // Always try to parse JSON safely
          let data: { url?: string; error?: string } = {};
          try {
            data = await res.json();
          } catch {
            throw new Error("Server returned invalid response");
          }

          if (!res.ok) throw new Error(data.error || "Upload failed");
          if (!data.url)  throw new Error("No URL returned from server");

          setImages(prev =>
            prev.map(img =>
              img.id === pid
                ? { ...img, publicUrl: data.url!, status: "done" as const }
                : img
            )
          );
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Upload failed";
          setImages(prev =>
            prev.map(img =>
              img.id === pid
                ? { ...img, status: "error" as const, error: msg }
                : img
            )
          );
        }
      })
    );
  }, []);

  const removeImage = useCallback((id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  }, []);

  const retryImage = useCallback((id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  }, []);

  const getUrls = () =>
    images.filter(i => i.status === "done" && i.publicUrl).map(i => i.publicUrl);

  const isUploading = images.some(i => i.status === "uploading");

  const reinit = useCallback((urls: string[]) => {
    setImages(
      urls.map(url => ({
        id: url,
        publicUrl: url,
        status: "done" as const,
        fileName: url.split("/").pop() || "image",
      }))
    );
  }, []);

  return { images, uploadFiles, removeImage, retryImage, getUrls, isUploading, reinit };
}
