import { TeamMember } from '@/types/team-member';
import FlexContainer from '../shared/FlexContainer';
import FacebookLink from '../shared/icons/FaceBookLink';
import InstagramLink from '../shared/icons/InstagramLink';
import LinkedInLink from '../shared/icons/LinkedInLink';
import Person from './Person';
import Bio from './Bio';
import Links from './Links';

interface Props {
  teamMember: TeamMember;
}

export default function ProfileInfo({ teamMember }: Props) {
  return (
    <FlexContainer className="flex-1 gap-4 bg-neutral-50">
      <Person name={teamMember.name} title={teamMember.title} />

      <Bio bio={teamMember.bio} />

      <Links
        facebook={teamMember.facebookLink}
        instagram={teamMember.instagramLink}
        linkedIn={teamMember.linkedInLink}
      />
    </FlexContainer>
  );
}
