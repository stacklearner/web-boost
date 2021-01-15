/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

const CustomBox = ({ children, ...props }) => {
	return (
		<Box
			sx={{
				...props,
			}}
		>
			{children}
		</Box>
	);
};

export default CustomBox;
