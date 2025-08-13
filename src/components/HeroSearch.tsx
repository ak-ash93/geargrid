"use client";
import React from "react";
import { Input } from "./ui/input";
import { CiCamera } from "react-icons/ci";
import { LiaSearchSolid } from "react-icons/lia";
import { useDropzone } from "react-dropzone";
import { Loader2, Upload, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HeroSearch: React.FC = () => {
  const [isImageSearchActive, setIsImageSearchActive] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [imagePreview, setImagePreview] = React.useState<string>("");
  const [searchImage, setSearchImage] = React.useState<File | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    router.push(`/cars/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
    setImagePreview("");
    setSearchImage(null);
    setIsImageSearchActive(false);
    toast.success("Searching for your dream car...");
  };

  const handleImageSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchImage) {
      toast.error("Please upload an image first.");
      return;
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB limit.");
        return;
      }
      setIsUploading(true);
      setSearchImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
        setIsUploading(false);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": [".png", ".jpg", ".jpeg"] },
      maxFiles: 1,
    });

  return (
    <div>
      {/* Text Search Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex w-full items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-white/20">
          {/* Camera Button */}
          <button
            type="button"
            onClick={() => setIsImageSearchActive(!isImageSearchActive)}
            className="cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-white/20 transition-colors">
            <CiCamera className="size-5 text-gray-200" />
          </button>

          {/* Search Input */}
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search for your dream car"
            className="text-xs flex-1 bg-transparent border-none focus:ring-0 placeholder:text-gray-400 text-gray-100"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center cursor-pointer justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
            <LiaSearchSolid className="size-5" />
          </button>
        </div>
      </form>

      {/* Image Search */}
      {isImageSearchActive && (
        <div className="mt-6 relative">
          <button
            type="button"
            onClick={() => setIsImageSearchActive(false)}
            className="absolute top-2 right-2 bg-white/20 p-1 rounded-full hover:bg-white/30 transition-colors">
            <X className="size-4 text-white" />
          </button>
          <form onSubmit={handleImageSearch}>
            <div>
              {imagePreview ? (
                <div className="flex flex-col items-center">
                  <Image
                    src={imagePreview}
                    alt="preview image"
                    width={80}
                    height={80}
                    className=" object-contain rounded-lg mb-2"
                  />
                </div>
              ) : (
                <div
                  {...getRootProps()}
                  className="flex flex-col items-center justify-center p-5 border-2 border-gray-300 rounded-lg cursor-pointer">
                  <input {...getInputProps()} />
                  <Upload className="size-10 text-gray-400 mb-2" />
                  {isDragActive && !isDragReject ? (
                    <p>Drop the files here...</p>
                  ) : (
                    <p>Drag & drop some files here, or click to select files</p>
                  )}
                  {isDragReject && (
                    <p className="text-red-500 mb-2 text-sm">
                      File type not supported. Only supports .png, .jpg, .jpeg
                    </p>
                  )}
                </div>
              )}
            </div>

            {imagePreview && (
              <div className=" flex items-center justify-center gap-2">
                <Button
                  variant={"destructive"}
                  className=" text-xs text-white  rounded-lg  transition-colors mt-2 cursor-pointer"
                  onClick={() => {
                    setSearchImage(null);
                    setImagePreview("");
                    toast.info("Image cleared.");
                  }}>
                  Clear Image
                </Button>
                <Button
                  disabled={isUploading}
                  type="submit"
                  variant={"default"}
                  className=" text-xs bg-gradient-to-br from-gray-800 to-gray-300 text-white hover:bg-gradient-to-bl hover:from-gray-700 hover:to-gray-400  rounded-lg  transition-colors duration-500 ease-in-out mt-2 cursor-pointer">
                  {isUploading ? (
                    <Loader2 className="animate-spin size-4" />
                  ) : (
                    "Search Image"
                  )}
                </Button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default HeroSearch;
