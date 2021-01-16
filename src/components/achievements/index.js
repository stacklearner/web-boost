/** @jsx jsx */
import { jsx } from 'theme-ui';
import shortid from 'shortid';

import Box from '../common/Box';
import FlexCentered from '../common/FlexCentered';
import Heading from '../common/Heading';
import Text from '../common/Text';
import Container from '../common/Container';

const Item = ({ title, body }) => {
	return (
		<Box mx='3' my='4' width={['95%', '45%', '30%']} display='block'>
			<Heading color='primary'>{title}</Heading>
			<Text mt='2' fontSize='3' fontFamily='bangla'>
				{body}
			</Text>
		</Box>
	);
};

const Achievements = ({ data }) => {
	return (
		<Container
			containerSx={{ backgroundColor: 'backgroundSecondary', mt: '4' }}
		>
			<FlexCentered flexWrap='wrap'>
				{data.map((item) => (
					<Item
						key={shortid.generate()}
						title={item.title}
						body={item.body}
					/>
				))}
			</FlexCentered>
		</Container>
	);
};

export default Achievements;

/**
 * Fixed Target
 * Monitor Progress
 * Small Goal
 *
 */
