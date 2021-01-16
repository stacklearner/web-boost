/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

const CustomText = ({ children, onClick, ...props }) => {
	return (
		<Text
			onClick={onClick}
			sx={{
				fontFamily: 'body',
				fontSize: [2, 2, 2, 3, 3],
				fontWeight: 'body',
				color: 'text',
				...props,
			}}
		>
			{children}
		</Text>
	);
};

export default CustomText;
