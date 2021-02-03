import logo from '../../../assets/logo.svg';
import { H1, StyledLink, Img } from './styles-Logo';

const Logo = () => (
	<H1>
		<StyledLink to="/">
			<Img src={logo} alt="QuizPro" />
		</StyledLink>
	</H1>
);

export default Logo;
