/** @jsx jsx */
import { jsx, Embed } from 'theme-ui';

import Box from './common/Box';
import Heading from './common/Heading';
import Container from './common/Container';

const Hero = () => {
	return (
		<Container containerSx={{ backgroundColor: 'heroBg' }}>
			<Box>
				<Box mt='4' mb='5'>
					<Heading
						fontSize={[6, 6, 7, 7, 8]}
						color='heroText'
						textAlign='center'
					>
						Web Boost
					</Heading>
					<Heading
						as='h2'
						fontSize={[4, 4, 4, 5, 5]}
						color='heroText'
						textAlign='center'
						fontWeight='body'
					>
						A Beginner-Friendly Fullstack Web Development Course
						Using Agile
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
					<Embed src='https://www.youtube.com/embed/Oi8q1zIGph0?controls=0' />
				</Box>
			</Box>
		</Container>
	);
};

export default Hero;
