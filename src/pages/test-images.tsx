import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageData {
  id: string;
  name: string;
  thumb: string;
  url: string;
}

export default function TestImages() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/drive-images?limit=5");
        const data = await res.json();
        if (res.ok) {
          console.log("Fetched images:", data);
          setImages(data.images || []);
        } else {
          setError(data.error || "Unknown error");
        }
      } catch {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Test Images</h1>
      {images.length === 0 ? (
        <p>No images found</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {images.map((img) => (
            <Image
              key={img.id}
              src={img.thumb}
              alt={img.name}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
