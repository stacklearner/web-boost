/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui';
import { useEffect } from 'react';

import Navbar from './Navbar';
import data from '../data/data.json';

console.log(data);

const Layout = ({ children }) => {
	const [colorMode, setColorMode] = useColorMode();

	useEffect(() => {
		if (colorMode === 'default') {
			setColorMode('dark');
		}
	}, []);

	return (
		<div>
			<Navbar mode={colorMode} setMode={setColorMode} />
			{children}
		</div>
	);
};

export default Layout;