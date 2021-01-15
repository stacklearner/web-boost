/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Template from './Template';

const Main = () => {
	return (
		<Box>
			<Template direction='ltr' />
			<Template direction='rtl' />
		</Box>
	);
};

export default Main;
