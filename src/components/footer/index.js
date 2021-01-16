/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Box, Container, Flex, Text } from '../common';
import { getIcon } from '../../assets';

const Footer = () => {
	return (
		<Box py='5' mt='4' background='#000000'>
			<Container>
				<Flex justifyContent='center' gap='1rem'>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://facebook.com/stacklearner'
					>
						<Image
							src={getIcon('facebook')}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://youtube.com/stacklearner'
					>
						<Image
							src={getIcon('youtube')}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='mailto:support@stacklearner'
					>
						<Image
							src={getIcon('email')}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://linkedin.com/company/stacklearner'
					>
						<Image
							src={getIcon('linkedin')}
							sx={{ width: '4rem', height: 'auto' }}
						/>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://twitter.com/stacklearner'
					>
						<Image
							src={getIcon('twitter')}
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
