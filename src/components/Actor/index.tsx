//styles
import { Wrapper, Image, Content } from "./Actor.styles";

type Props = {
  name: string;
  character: string;
  imageUrl: string;
};

const Actor = ({ name, character, imageUrl }: Props) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <Content>
      <h3>{name}</h3>
      <p>{character}</p>
    </Content>
  </Wrapper>
);

export default Actor;
