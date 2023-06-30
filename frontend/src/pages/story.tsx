import Card from '@/components/shared/Card';
import FlexContainer from '@/components/shared/FlexContainer';
import Heading from '@/components/shared/Heading';
import PageHeading from '@/components/shared/PageHeading';

export default function Story() {
  return (
    <FlexContainer className="gap-24">
      <PageHeading>Our Story</PageHeading>
      <Card className="flex w-8/12 flex-col gap-8 text-start">
        {paragraphs.map(para => (
          <p>{para}</p>
        ))}
        <blockquote className="italic">{quote}</blockquote>
      </Card>
    </FlexContainer>
  );
}

const paragraphs = [
  `What started out with a text message in August 2019 from Corey Dupree to several groups of family members and childhood friends, has since evolved into something much larger. The mantra of "Collaboration Over Competition" couldn't be more true when talking about our team. Having all (un)fortunately experienced various forms of adversity in life, we knew that actions had to speak louder than words especially if we wanted to break down some of the barriers that we know others had to face including systemic racism and inequity of educational resources.`,

  `Through our educational events, we intentionally collaborate with organizations and change makers to impactfully support youth and individuals in need. The importance of being able to provide resources (i.e. books, workshops, and scholarships) equitably can not be overstated enough.`,

  ,
];

const quote = `“Try to have more faith and less fear, try to express it to your peers, I’m talking about dreams. Better to do it and let it be seen, cause then it’s so clear.” -Nipsey Hussle`;
