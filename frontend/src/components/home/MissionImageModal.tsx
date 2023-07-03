import type { SiteImage } from '@/types/images';
import { Modal } from '@mui/material';
import Image from 'next/image';

interface Props {
  handleClose: (_event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  image: SiteImage | null;
  isOpen: boolean;
}

export default function MissionImageModal({
  handleClose,
  image,
  isOpen,
}: Props) {
  return (
    <Modal
      className="flex place-content-center place-items-center"
      disableAutoFocus
      open={isOpen && image !== null}
      onClose={handleClose}
    >
      <Image
        alt="stuff"
        className="max-h-[80vh] max-w-[80vw]"
        height={image?.height}
        src={image?.src ?? ''}
        width={image?.width}
      />
    </Modal>
  );
}
