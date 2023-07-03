import FlexContainer from '../shared/FlexContainer';
import Image from 'next/image';
import { TeamMember } from '@/types/team-member';
import Card from '../shared/Card';
import InstagramLink from '../shared/icons/InstagramLink';
import LinkedInLink from '../shared/icons/LinkedInLink';
import FacebookLink from '../shared/icons/FaceBookLink';

interface Props {
  teamMember: TeamMember;
}

export default function ProfileCard({ teamMember }: Props) {
  return (
    <article>
      <Card className="h-[720px] w-[400px]">
        <FlexContainer className="h-full">
          <div className="mx-[-1rem] mt-[-1rem]">
            <Image
              src="https://picsum.photos/400"
              alt="somebody"
              className="rounded-t-md"
              height={400}
              width={400}
            />
          </div>

          <FlexContainer className="flex-1 gap-4 bg-neutral-50">
            <FlexContainer>
              <p className="italic">{teamMember.title}</p>
              <p className="font-bold">{teamMember.name}</p>
            </FlexContainer>

            <FlexContainer className="gap-4 text-start">
              {teamMember.bio.map(para => (
                <p key={para}>{para}</p>
              ))}
            </FlexContainer>

            <FlexContainer
              align="end"
              className="w-full flex-1 gap-2"
              direction="row"
            >
              <InstagramLink color="black" href={teamMember.instagramLink} />

              {teamMember.linkedInLink && (
                <LinkedInLink color="black" href={teamMember.linkedInLink} />
              )}

              {teamMember.facebookLink && (
                <FacebookLink color="black" href={teamMember.facebookLink} />
              )}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Card>
    </article>
  );
}
