/** @jsx jsx */
import { jsx, Box, Text, Embed } from 'theme-ui';
import Container from './common/Container';

const Hero = () => {
	return (
		<Container containerSx={{ backgroundColor: 'heroBg' }}>
			<Box>
				<Box sx={{ marginTop: 5, marginBottom: 5 }}>
					<Text
						sx={{
							fontSize: 8,
							color: 'heroText',
							fontFamily: 'heading',
							fontWeight: 'heading',
							textAlign: 'center',
						}}
					>
						Web Boost
					</Text>
					<Text
						sx={{
							fontSize: 4,
							color: 'heroText',
							fontFamily: 'body',
							textAlign: 'center',
							fontWeight: 'body',
						}}
					>
						A Beginner-Friendly Fullstack Web Development Course
						Using Agile
					</Text>
				</Box>
				<Box
					sx={{
						margin: '0 auto',
						marginTop: 4,
						marginBottom: -250,
						border: '0.5rem solid #212121',
						borderRadius: '0.25rem',
						width: ['100%', '100%', '100%', '80%'],
						boxShadow:
							'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
					}}
				>
					<Embed src='https://www.youtube.com/embed/Oi8q1zIGph0?controls=0' />
				</Box>
			</Box>
		</Container>
	);
};

export default Hero;
