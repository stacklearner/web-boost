/** @jsx jsx */
import { jsx, IconButton, Image } from 'theme-ui';
import PropTypes from 'prop-types';

const CustomIconButton = ({ icon, width, onClick, ...props }) => {
	return (
		<IconButton
			sx={{
				cursor: 'pointer',
				border: 'none',
				outline: 'none',
				...props,
			}}
			onClick={onClick}
		>
			<Image
				src={icon}
				sx={{
					width,
					height: 'auto',
				}}
			/>
		</IconButton>
	);
};

CustomIconButton.propTypes = {
	icon: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

CustomIconButton.defaultProps = {
	width: '1.5rem',
};

export default CustomIconButton;
