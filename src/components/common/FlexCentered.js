/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

const FlexCentered = ({ children, ...props }) => {
	return (
		<Flex
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				...props,
			}}
		>
			{children}
		</Flex>
	);
};

export default FlexCentered;
