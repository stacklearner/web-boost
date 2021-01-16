/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import Box from '../common/Box';
import Container from '../common/Container';
import Flex from '../common/Flex';
import Text from '../common/Text';

import facebook from '../../images/facebook.png';
import youtube from '../../images/youtube.png';
import email from '../../images/email.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';

const Footer = () => {
	return (
		<Box py='5' mt='4' background='#000000'>
			<Container>
				<Flex justifyContent='center' gap='1rem'>
					<a target='_blank' href='https://facebook.com/stacklearner'>
						<Image
							src={facebook}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a target='_blank' href='https://youtube.com/stacklearner'>
						<Image
							src={youtube}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a target='_blank' href='mailto:support@stacklearner'>
						<Image
							src={email}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a
						target='_blank'
						href='https://linkedin.com/company/stacklearner'
					>
						<Image
							src={linkedin}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a target='_blank' href='https://twitter.com/stacklearner'>
						<Image
							src={twitter}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
				</Flex>
				<Flex justifyContent='center' mt='2'>
					<Text textAlign='center' fontSize='4'>
						01714137780 - support@stacklearner
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
