import FlexContainer from '../shared/FlexContainer';
import Image from 'next/image';
import { TeamMember } from '@/types/team-member';
import Card from '../shared/Card';
import InstagramLink from '../shared/icons/InstagramLink';
import LinkedInLink from '../shared/icons/LinkedInLink';
import FacebookLink from '../shared/icons/FaceBookLink';
import ProfilePic from './ProfilePic';
import ProfileInfo from './ProfileInfo';

interface Props {
  teamMember: TeamMember;
}

export default function ProfileCard({ teamMember }: Props) {
  return (
    <article>
      <Card className="h-[720px] w-[400px]">
        <FlexContainer className="h-full">
          <ProfilePic />

          <ProfileInfo teamMember={teamMember} />
        </FlexContainer>
      </Card>
    </article>
  );
}
