/** @jsx jsx */
import { jsx, Image, Box, Flex } from 'theme-ui';
import PropTypes from 'prop-types';

import Container from '../common/Container';
import Header from './Header';
import Sprints from '../sprints';
import Img from '../../images/icon.png';

const Template = ({ milestone, direction }) => {
	return (
		<Box>
			<Container>
				<Box sx={{ my: 6 }}>
					<Flex sx={{ direction: `${direction}`, flexWrap: 'wrap' }}>
						<Image
							src={Img}
							sx={{ width: ['100%', '100%', '40%'] }}
						/>
						<Header
							title={milestone.name}
							sprint={milestone.sprint}
							duration={milestone.duration}
							summary={milestone.summary}
						/>
					</Flex>
				</Box>
			</Container>
			<Sprints milestone={milestone} />
		</Box>
	);
};

Template.propTypes = {
	milestone: PropTypes.object.isRequired,
	direction: PropTypes.string.isRequired,
};

Template.defaultProps = {
	direction: 'ltr',
};

export default Template;
