import { GetStaticProps } from 'next';
import FlexContainer from '@/components/shared/FlexContainer';
import MissionHeader from '@/components/home/MissionHeader';
import MissionImageList from '@/components/home/MissionImageList';
import MissionImageModal from '@/components/home/MissionImageModal';
import useMissionImages from '@/hooks/useMissionImages';
import type { SiteImage } from '@/types/images';

interface Props {
  images: SiteImage[];
}

export default function Home({ images }: Props) {
  const { currentImage, handleClose, handleOpen, isOpen } =
    useMissionImages(images);

  return (
    <FlexContainer className="h-full justify-between">
      <MissionHeader />

      <MissionImageList handleOpen={handleOpen} images={images} />

      <MissionImageModal
        handleClose={handleClose}
        image={currentImage}
        isOpen={isOpen}
      />
    </FlexContainer>
  );
}

export const getStaticProps: GetStaticProps<{
  images: SiteImage[];
}> = async () => {
  const page = getRandomInt();
  const api = `https://picsum.photos/v2/list?page=${page}&limit=12`;

  const res = await fetch(api);
  const data: {
    download_url: string;
    height: number;
    width: number;
  }[] = await res.json();

  const images = data.map(x => ({
    height: x.height,
    src: x.download_url,
    width: x.width,
  }));

  return { props: { images } };
};

function getRandomInt(min = 1, max = 5) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
