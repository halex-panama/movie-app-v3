import { Link } from "react-router-dom";

//images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-log" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-log" />
    </Content>
  </Wrapper>
);

export default Header;
