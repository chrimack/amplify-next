import type { SiteImage } from '@/types/images';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

interface Props {
  handleOpen: (i: number) => void;
  images: SiteImage[];
}

export default function MissionImageList({ handleOpen, images }: Props) {
  return (
    <ImageList
      className="max-h-[480px] w-fit bg-black shadow-lg"
      variant="quilted"
      cols={3}
      gap={8}
    >
      {images.map((image, i) => (
        <ImageListItem key={image.src}>
          <Image
            alt="some stuff"
            className="h-auto w-80 cursor-pointer border-2 border-black transition-colors hover:border-white"
            src={image.src}
            width={Math.min(image.width, 360)}
            height={Math.min(image.height, 360)}
            onClick={() => handleOpen(i)}
            priority
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
