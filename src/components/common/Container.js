/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';

const ResponsiveContainer = ({ children, containerSx, boxSx }) => {
	return (
		<Container sx={{ ...containerSx }}>
			<Box
				sx={{
					p: 4,
					width: ['100%', '100%', '100%', '70%'],
					m: 'auto',
					...boxSx,
				}}
			>
				{children}
			</Box>
		</Container>
	);
};

ResponsiveContainer.defaultProps = {
	containerSx: {},
	boxSx: {},
};

export default ResponsiveContainer;
