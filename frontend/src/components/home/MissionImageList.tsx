import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

type Image = {
  src: string;
  height: number;
  width: number;
};

interface Props {
  handleOpen: (i: number) => void;
  images: Image[];
}

export default function MissionImageList({ handleOpen, images }: Props) {
  return (
    <ImageList
      sx={{ width: '95%', height: '300px' }}
      variant="masonry"
      cols={3}
      gap={8}
    >
      {images.map((image, i) => (
        <ImageListItem key={image.src}>
          <Image
            alt="some stuff"
            className="cursor-pointer"
            src={image.src}
            width={Math.min(image.width, 400)}
            height={Math.min(image.height, 400)}
            onClick={() => handleOpen(i)}
            priority
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
