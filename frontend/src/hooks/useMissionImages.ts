import type { SiteImage } from '@/types/images';
import { useState } from 'react';

export default function useMissionImages(images: SiteImage[]) {
  const [currentImage, setCurrentImage] = useState<SiteImage | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (i: number) => {
    setIsOpen(true);
    setCurrentImage(images[i]);
  };

  const handleClose = (
    _event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      setIsOpen(false);
    }
    setCurrentImage(null);
  };

  return {
    currentImage,
    handleClose,
    handleOpen,
    isOpen,
  };
}
