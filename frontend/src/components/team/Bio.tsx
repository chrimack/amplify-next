import FlexContainer from '../shared/FlexContainer';

interface Props {
  bio: string[];
}

export default function Bio({ bio }: Props) {
  return (
    <FlexContainer className="gap-4 text-start">
      {bio.map(para => (
        <p key={para}>{para}</p>
      ))}
    </FlexContainer>
  );
}
