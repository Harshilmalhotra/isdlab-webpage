import { useState, useEffect, useCallback, useRef } from "react";
import styles from "../styles/MasonryGallery.module.css";
import { gsap } from "gsap";
import Image from "next/image";

interface ImageData {
  id: string;
  name: string;
  thumb: string;
  full: string;
}

export default function MasonryGallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [columns, setColumns] = useState(3);
  const [grid, setGrid] = useState<any[]>([]);
  const masonryRef = useRef<HTMLDivElement>(null);
  
  // Function to resize and position grid items
  const resizeGridItems = useCallback(() => {
    if (!masonryRef.current) return;
    
    const container = masonryRef.current;
    const containerWidth = container.offsetWidth;
    const items = Array.from(container.querySelectorAll(`.${styles.item}`));
    const columnWidth = containerWidth / columns;
    
    // Initialize column heights
    const columnHeights = Array(columns).fill(0);
    
    // Create new grid layout
    const newGrid = items.map((item, index) => {
      const img = images[index];
      if (!img) return null;
      
      // Find the shortest column
      const shortestColIndex = columnHeights.indexOf(Math.min(...columnHeights));
      
      // Calculate position
      const x = shortestColIndex * columnWidth;
      const y = columnHeights[shortestColIndex];
      
      // Get aspect ratio or use default
      const aspectRatio = loaded[img.id] ? (item as HTMLElement).offsetWidth / (item as HTMLElement).offsetHeight : 1;
      
      // Calculate item height based on column width and aspect ratio
      const itemHeight = columnWidth / aspectRatio;
      
      // Update column height
      columnHeights[shortestColIndex] += itemHeight + 16; // 16px for gap
      
      // Return position data
      return {
        id: img.id,
        x, 
        y,
        width: columnWidth - 16, // 16px for gap
        height: itemHeight
      };
    }).filter(Boolean);
    
    // Apply layout with GSAP for smooth animation
    setGrid(newGrid);
    
    newGrid.forEach(item => {
      if (!item) return;
      
      const element = container.querySelector(`[data-id="${item.id}"]`);
      if (element) {
        gsap.to(element, {
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
    
    // Update container height
    const maxHeight = Math.max(...columnHeights);
    container.style.height = `${maxHeight}px`;
  }, [columns, images, loaded, masonryRef]);
  
  // Handle window resize and adjust column count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1500) setColumns(5);
      else if (width > 1000) setColumns(4);
      else if (width > 600) setColumns(3);
      else if (width > 400) setColumns(2);
      else setColumns(1);
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchImages = useCallback(async () => {
    if (loading || allImagesLoaded) return;
    setLoading(true);
    try {
      const url = `/api/drive-images?limit=12${
        nextPageToken ? `&pageToken=${nextPageToken}` : ""
      }`;
      const res = await fetch(url);
      const data = await res.json();

      if (Array.isArray(data.images)) {
        // If we got no images or reached the end, mark as complete
        if (data.images.length === 0 || !data.nextPageToken) {
          setAllImagesLoaded(true);
        }
        
        setImages((prev) => [
          ...prev,
          ...data.images
        ]);
        setNextPageToken(data.nextPageToken || null);
        
        // If there's no next page token, we've reached the end
        if (!data.nextPageToken) {
          setAllImagesLoaded(true);
        }
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }, [nextPageToken, allImagesLoaded, loading]);

  // Handle image load event
  const handleImageLoad = useCallback((id: string) => {
    setLoaded(prev => {
      // Only update if not already loaded
      if (prev[id]) return prev;
      const newLoaded = {...prev, [id]: true};
      setTimeout(resizeGridItems, 50); // Small delay to ensure image is fully rendered
      return newLoaded;
    });
  }, [resizeGridItems]);

  // Setup resize observer for more reliable resizing
  useEffect(() => {
    resizeGridItems();
    
    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeGridItems();
      }, 100);
    };
    
    window.addEventListener("resize", debouncedResize);
    
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [resizeGridItems]);

  // Update layout when images change
  useEffect(() => {
    if (images.length > 0) {
      resizeGridItems();
    }
  }, [images, loaded, resizeGridItems]);

  // Initial load and resize grid
  useEffect(() => {
    // Only load initially if we haven't loaded anything yet
    if (images.length === 0 && !loading) {
      fetchImages();
    }
    
    // Initial grid setup when we have images
    if (images.length > 0 && masonryRef.current) {
      resizeGridItems();
    }
  }, [fetchImages, images.length, loading, resizeGridItems]);

  // Infinite scroll
  useEffect(() => {
    // Create a throttled scroll handler to avoid too many calls
    let scrollTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      if (scrollTimeout !== null || allImagesLoaded) return;
      
      scrollTimeout = setTimeout(() => {
        // Check if we're near the bottom of the page
        const scrollPosition = window.innerHeight + window.scrollY;
        const scrollThreshold = document.body.offsetHeight - 500;
        
        if (
          scrollPosition >= scrollThreshold &&
          !loading &&
          nextPageToken &&
          !allImagesLoaded
        ) {
          console.log("Loading more images...");
          fetchImages();
        }
        
        scrollTimeout = null;
      }, 200); // 200ms throttle
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [fetchImages, loading, nextPageToken, allImagesLoaded]);

  return (
    <>
      {/* Masonry Grid */}
      <div className={styles.masonry} ref={masonryRef}>
        {images.map((img, index) => (
          <div
            key={`${img.id}-${index}`}
            className={styles.item}
            data-id={img.id}
            onClick={() => {
              console.log("Selected image URL:", img.full);
              setSelectedImage(img.full);
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              transform: 'translate(0, 0)', // Initial position for GSAP
              transition: 'none' // Let GSAP handle the animations
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={img.thumb}
                alt={img.name}
                width={300}
                height={300}
                loading="lazy"
                onLoad={() => handleImageLoad(img.id)}
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  cursor: "pointer",
                  display: "block",
                  borderRadius: "8px",
                  opacity: loaded[img.id] ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out"
                }}
              />
              {!loaded[img.id] && (
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '200px', 
                  background: '#f0f0f0',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className={styles.spinner}></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {loading && <p className={styles.loadingText}>Loading more images...</p>}
      
      {/* End of gallery message */}
      {allImagesLoaded && images.length > 0 && (
        <p className={styles.endMessage}>All images loaded</p>
      )}
      
      {/* Empty state */}
      {!loading && images.length === 0 && (
        <div className={styles.emptyState}>
          <p>No images found in the gallery.</p>
        </div>
      )}

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className={styles.modal}
          onClick={(e) => {
            // Only close if clicking the background, not the image
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <button 
            className={styles.closeButton}
            onClick={() => setSelectedImage(null)}
            aria-label="Close fullscreen view"
          >
            ×
          </button>
          <div className={styles.imageContainer}>
            <img
              src={selectedImage}
              alt="Full view"
              className={styles.fullImage}
              onError={() => console.error("Failed to load image:", selectedImage)}
            />
          </div>
        </div>
      )}
    </>
  );
}
