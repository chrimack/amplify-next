import FlexContainer from '../shared/FlexContainer';
import FacebookLink from '../shared/icons/FaceBookLink';
import InstagramLink from '../shared/icons/InstagramLink';
import LinkedInLink from '../shared/icons/LinkedInLink';

interface Props {
  facebook?: string;
  instagram: string;
  linkedIn?: string;
}

export default function Links({ facebook, instagram, linkedIn }: Props) {
  return (
    <FlexContainer
      align="items-end"
      className="w-full flex-1 gap-2"
      direction="row"
    >
      <InstagramLink color="black" href={instagram} />

      {linkedIn && <LinkedInLink color="black" href={linkedIn} />}

      {facebook && <FacebookLink color="black" href={facebook} />}
    </FlexContainer>
  );
}
