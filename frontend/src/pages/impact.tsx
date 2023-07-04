import Card from '@/components/shared/Card';
import FlexContainer from '@/components/shared/FlexContainer';
import Heading from '@/components/shared/Heading';
import PageHeading from '@/components/shared/PageHeading';
import { ButtonLink } from '@/components/shared/icons/DonateBookLink';
import Image from 'next/image';

export default function Impact() {
  return (
    <FlexContainer className="gap-10">
      <EventsCard />

      <DonationCard />
    </FlexContainer>
  );
}

const events = [
  'The Layers of Black History Gala Series',
  'The "Little" Layers of Black History Gala Series',
  'A Brunch of Haircare Workshops',
];

const donations = [
  {
    thing: '297 books',
    place: 'donations to the Palmyra (PA) Area School District',
  },
  {
    thing: '225 books',
    place: 'donated to children and individuals at community events',
  },
  {
    thing: '65 books',
    place:
      'placed in "Free Libraries" in Palmyra, Pa., Harrisburg, Pa, and Cambridge, Ma.',
  },
  {
    thing: '30 books',
    place:
      'placed in Central Pa. and Greater Boston Area coffee shops (for individuals to read or take home!)',
  },
  {
    thing: '50 pounds',
    place: 'of non-perishable food items donated to The Caring Cupboard',
  },
  {
    thing: '$2,500 of scholarships',
    place: 'for students pursuing post-secondary careers',
  },
];

const plans = `We currently are expanding to include donating books to: three (3) additional schools, two (2) "Back to School" initiatives, the Palmyra Area Public Library, several coffee shops, and more free community events!`;

function EventsCard() {
  return (
    <Card className="flex min-h-[396px] w-3/4 max-w-5xl">
      <Image
        src={'https://picsum.photos/480/360'}
        alt="something"
        height={360}
        width={480}
      />
      <FlexContainer align="items-center" className="w-full gap-12">
        <PageHeading>
          The Impact of the Layers of Black History Events
        </PageHeading>
        <FlexContainer align="items-start">
          <p className="text-xl">
            To date, we have hosted the following events:
          </p>
          <ul className="list-disc pl-[1.2em]">
            {events.map(event => (
              <li className="list-item text-start italic">{event}</li>
            ))}
          </ul>
        </FlexContainer>
      </FlexContainer>
    </Card>
  );
}

function DonationCard() {
  return (
    <Card className="flex min-h-[396px] w-3/4 max-w-5xl justify-between gap-8">
      <FlexContainer className="justify-between text-start">
        <div>
          <Heading className="text-3xl" priority="h3">
            Donation Recipients
          </Heading>
          <p>Sooo... where have we donated?</p>
        </div>
        <Image
          src={'https://picsum.photos/200'}
          alt="hello"
          width={200}
          height={200}
        />
        <ButtonLink />
      </FlexContainer>
      <FlexContainer
        align="items-start"
        className="max-w-[65%] justify-between text-start"
      >
        <div>
          <p className="text-xl">
            To date, the following donations have been made via our events:
          </p>
          <ul className="list-inside list-disc">
            {donations.map(donation => (
              <li className="list-item text-start italic">
                <strong>{donation.thing}</strong> {donation.place}
              </li>
            ))}
          </ul>
        </div>

        <section>{plans}</section>
      </FlexContainer>
    </Card>
  );
}
