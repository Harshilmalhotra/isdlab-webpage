import { useState, useEffect } from "react";
import EnhancedMasonry from "@/components/EnhancedMasonry";
import "../styles/MasonryAnimation.css";

interface ImageData {
  id: string;
  name: string;
  thumb: string;
  full: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/drive-images?limit=30');
        const data = await res.json();
        
        if (Array.isArray(data.images)) {
          setImages(data.images);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (fullImageUrl: string) => {
    setSelectedImage(fullImageUrl);
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center py-6">Gallery</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <EnhancedMasonry 
            images={images} 
            onImageClick={handleImageClick} 
          />
        </div>
      )}

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
            aria-label="Close fullscreen view"
          >
            ×
          </button>
          <div className="max-w-[90%] max-h-[90%]" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain"
              onError={() => console.error("Failed to load image:", selectedImage)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
