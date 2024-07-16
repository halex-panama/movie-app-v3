//styles
import { fadeInThumbVariant } from "../../helpers";
import { Wrapper, Image, Content } from "./Actor.styles";

type Props = {
  name: string;
  character: string;
  imageUrl: string;
  index: number;
};

const Actor = ({ name, character, imageUrl, index }: Props) => (
  <Wrapper
    initial="initial"
    whileInView="animate"
    variants={fadeInThumbVariant}
    viewport={{ once: true }}
    custom={index}
  >
    <Image src={imageUrl} alt="actor-thumb" />
    <Content>
      <h3>{name}</h3>
      <p>{character}</p>
    </Content>
  </Wrapper>
);

export default Actor;
