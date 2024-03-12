import { Link } from "react-router-dom";

//styles
import { Wrapper, Content } from "./BreadCrumb.styles";

type Props = {
  movieTitle: string;
};

const BreadCrumb = ({ movieTitle }: Props) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
