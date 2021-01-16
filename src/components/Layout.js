/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui';
import '../static/css/font.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import Navbar from './Navbar';
import SEO from './SEO';

const Layout = ({ children }) => {
	const [colorMode, setColorMode] = useColorMode();
	return (
		<div>
			<SEO />
			<Navbar mode={colorMode} setMode={setColorMode} />
			{children}
			<MessengerCustomerChat
				pageId='101277768070549'
				appId='3434413739996523'
			/>
		</div>
	);
};

export default Layout;
