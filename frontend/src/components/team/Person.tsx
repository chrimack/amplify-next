import FlexContainer from '../shared/FlexContainer';

interface Props {
  name: string;
  title: string;
}

export default function Person({ name, title }: Props) {
  return (
    <FlexContainer>
      <p className="italic">{title}</p>
      <p className="font-bold">{name}</p>
    </FlexContainer>
  );
}
