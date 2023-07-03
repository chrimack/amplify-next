import Link from 'next/link';
import Heading from '../shared/Heading';
import FlexContainer from '../shared/FlexContainer';
import Card from '../shared/Card';
import { ButtonLink } from '../shared/icons/DonateBookLink';
import PageHeading from '../shared/PageHeading';

export default function MissionHeader() {
  return (
    <FlexContainer className="gap-8">
      <PageHeading>Our Mission</PageHeading>
      <Card>{content}</Card>
      <ButtonLink />
    </FlexContainer>
  );
}

const content =
  'The Layers of Black History team is committed to mobilizing communities to provide social, emotional and professional development for their youth. This is done through curated events that take place throughout the year that highlight and focus on educational platforms and representation in literacy.';
