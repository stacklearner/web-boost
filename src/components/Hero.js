/** @jsx jsx */
import { jsx, Embed } from 'theme-ui';

import { Box, Heading, Container } from './common';
import getData from '../mapdata';

const Hero = () => {
	const site = getData('site');
	const trailer = getData('trailer');
	return (
		<Container containerSx={{ backgroundColor: 'heroBg' }}>
			<Box>
				<Box mt='4' mb='5'>
					<Heading
						fontSize={[6, 6, 7, 7, 8]}
						color='heroText'
						textAlign='center'
					>
						{site.meta.title}
					</Heading>
					<Heading
						as='h2'
						fontSize={[4, 4, 4, 5, 5]}
						color='heroText'
						textAlign='center'
						fontWeight='body'
					>
						{site.meta.subtitle}
					</Heading>
				</Box>
				<Box
					m='0 auto'
					mt='4'
					mb='-15rem'
					border='0.5rem solid #212121'
					borderRadius='0.25rem'
					width={['100%', '100%', '100%', '80%']}
					boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
				>
					<Embed src={trailer} />
				</Box>
			</Box>
		</Container>
	);
};

export default Hero;
