/** @jsx jsx */
import { jsx, Image, Box, Flex, Text } from 'theme-ui';

import Container from '../common/Container';
import Header from './Header';
import Sprints from '../sprints';
import Img from '../../images/icon.png';

const Template = ({ direction }) => {
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
							title='This is A Dummy Title for Test'
							sprint='10'
							duration='3 months'
							body='The component parses a URL and loads in the appropriate markup and external SDKs to play media from various sources. Props can be passed in to control playback and react to events such as buffering or media ending. See the demo source for a full example.'
						/>
					</Flex>
				</Box>
			</Container>
			<Sprints />
		</Box>
	);
};

export default Template;
