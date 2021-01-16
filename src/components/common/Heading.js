/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';

const CustomHeading = ({ children, onClick, as, ...props }) => {
	return (
		<Heading
			as={as || 'h1'}
			sx={{
				fontFamily: 'heading',
				fontSize: 5,
				fontWeight: 'heading',
				color: 'title',
				...props,
			}}
			onClick={onClick}
		>
			{children}
		</Heading>
	);
};

export default CustomHeading;
