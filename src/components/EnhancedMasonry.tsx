import React, { useState } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme, useMediaQuery } from '@mui/material';

interface ImageItem {
  id: string;
  thumb: string;
  full: string;
  name: string;
}

interface MasonryGalleryProps {
  images: ImageItem[];
  onImageClick: (fullImage: string) => void;
}

const EnhancedMasonry: React.FC<MasonryGalleryProps> = ({ images, onImageClick }) => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const theme = useTheme();
  
  // Responsive column configuration
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isSmScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px - 1200px
  
  // Determine number of columns based on screen size
  const getCols = () => {
    if (isXsScreen) return 1;
    if (isSmScreen) return 2;
    if (isMdScreen) return 3;
    return 4; // For large screens and above
  };
  
  // Handler for image load events
  const handleImageLoad = (id: string) => {
    setImagesLoaded(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <Box sx={{ 
      width: '100%', 
      height: 'auto',
      minHeight: '500px',
      overflowY: 'visible',
      my: 2
    }}>
      <ImageList 
        variant="masonry" 
        cols={getCols()} 
        gap={16}
        sx={{ margin: 0 }}
      >
        {images.map((item) => (
          <ImageListItem 
            key={item.id}
            onClick={() => onImageClick(item.full)}
            sx={{ 
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px) scale(1.02)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                zIndex: 1,
                '& img': {
                  transform: 'scale(1.05)',
                }
              }
            }}
          >
            <img
              src={item.thumb}
              alt={item.name}
              loading="lazy"
              onLoad={() => handleImageLoad(item.id)}
              style={{
                display: 'block',
                width: '100%',
                transition: 'transform 0.5s ease, opacity 0.3s ease-in-out',
                opacity: imagesLoaded[item.id] ? 1 : 0
              }}
            />
            {!imagesLoaded[item.id] && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f0f0f0'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '3px solid rgba(0,0,0,0.1)',
                  borderTopColor: '#3498db',
                  animation: 'spin 1s ease-in-out infinite'
                }}></div>
              </div>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default EnhancedMasonry;
