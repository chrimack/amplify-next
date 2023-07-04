import Card from '@/components/shared/Card';
import FlexContainer from '@/components/shared/FlexContainer';
import PageHeading from '@/components/shared/PageHeading';
import ProfileCard from '@/components/team/ProfileCard';
import { Team } from '@/constants/team';
import { PicSumImage, SiteImage } from '@/types/images';
import { GetStaticProps } from 'next';

export default function MeetTheTeam() {
  return (
    <FlexContainer className="gap-8">
      <PageHeading>Meet the Team</PageHeading>
      <Card className="min-w-[700px]">{content}</Card>

      <FlexContainer className="flex-wrap gap-8" direction="row">
        {Team.map((teamMember, i) => (
          <ProfileCard key={teamMember.name} teamMember={teamMember} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

const content =
  'We understand, and wholeheartedly believe, that actions speak louder than words. We are intentionally committed to fostering a community that embraces representation and equity across experience, gender, race, age, religion, and identity.';
