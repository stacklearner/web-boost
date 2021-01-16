/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui';
import '../static/css/font.css';

import Navbar from './Navbar';

const Layout = ({ children }) => {
	const [colorMode, setColorMode] = useColorMode();

	return (
		<div>
			<Navbar mode={colorMode} setMode={setColorMode} />
			{children}
		</div>
	);
};

export default Layout;
