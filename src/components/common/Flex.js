/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

const CustomFlex = ({ children, ...props }) => {
	return (
		<Flex
			sx={{
				...props,
			}}
		>
			{children}
		</Flex>
	);
};

export default CustomFlex;
