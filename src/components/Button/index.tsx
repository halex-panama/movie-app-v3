//styles
import { Wrapper } from "./Button.styles";

type Props = {
  text: string;
  callback: () => void;
};

const Button = ({ text, callback }: Props) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;
