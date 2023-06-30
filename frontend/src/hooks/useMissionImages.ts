import { useState } from 'react';

type Image = {
  src: string;
  height: number;
  width: number;
};

export default function useMissionImages(images: Image[]) {
  const [currentImage, setCurrentImage] = useState<Image | null>(null);
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
