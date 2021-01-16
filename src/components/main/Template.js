/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import PropTypes from 'prop-types';

import { Box, Flex, Container } from '../common';
import Header from './Header';
import Sprints from '../sprints';

import { getImage } from '../../assets';

const Template = ({ milestone, open }) => {
	return (
		<Box>
			<Container>
				<Box my={[3, 4, 6, 6]}>
					<Flex flexWrap='wrap'>
						<Box width={['100%', '100%', '35%']}>
							<Image
								src={getImage(milestone.image)}
								sx={{
									width: '100%',
									height: 'auto',
								}}
							/>
						</Box>
						<Flex
							alignItems='center'
							width={['100%', '100%', '65%']}
							mt={[4, 4, 4, 0, 0]}
						>
							<Header
								title={milestone.name}
								sprint={milestone.sprint}
								duration={milestone.duration}
								summary={milestone.summary}
							/>
						</Flex>
					</Flex>
				</Box>
			</Container>
			<Sprints open={open} milestone={milestone} />
		</Box>
	);
};

Template.propTypes = {
	milestone: PropTypes.object.isRequired,
	open: PropTypes.bool,
};

Template.defaultProps = {
	direction: 'ltr',
};

export default Template;
