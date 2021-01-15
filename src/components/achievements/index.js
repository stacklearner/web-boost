/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import shortid from 'shortid';
import Container from '../common/Container';

const bullets = [
	{
		title: 'Fixed Target',
		body:
			'আমরা আপনাদের জন্য এক বছরের গোল সেট করে দিয়েছি এবং আপনাদের এক বছরের জন্য টার্গেট ফিক্সড',
	},
	{
		title: 'Small Goal',
		body:
			'ছোট ছোট স্প্রিন্টের মাধ্যমে আমরা বড় গোলটাকে অনেক গুলো ছোট ছোট গোলে ভেঙ্গে ফেলেছি যেন সহজে অর্জন করা যায়',
	},
	{
		title: 'Short Journey',
		body:
			'ছোট গোল হওয়ার কারণে জার্নিটাও অনেক ছোট হবে। রাস্তায় হোঁচট খাওয়ার সম্ভাবনা ও অনেক কম থাকবে।',
	},
	{
		title: 'Zero Distraction',
		body:
			'ছোট জার্নি ছোট রাস্তা। রাস্তা যদি ছোট হয় তাহলে এদিকে ওদিকে ডিস্ট্রাক্ট হয়ে যাওয়ার ও কোনো চান্স থাকবে না',
	},
	{
		title: 'Monitor Progress',
		body:
			'যেহেতু অনেক গুলো ছোট ছোট গোল রয়েছে, তাই আপনি সহজেই নিজের প্রোগ্রেস ট্রাক করতে পারবেন অনেক সহজে',
	},
	{
		title: 'Big Achievement',
		body:
			'সব ছোট গোল যখন পূরণ হয়ে যাবে তখন দেখা যাবে এচিভমেন্টটা অনেক বড় হয়ে গেছে',
	},
];

const Item = ({ title, body }) => {
	return (
		<Box
			sx={{
				mx: 2,
				my: 4,
				width: ['95%', '45%', '30%'],
				display: 'block',
			}}
		>
			<Text
				sx={{
					fontFamily: 'heading',
					fontSize: 5,
					fontWeight: 'text',
					color: 'title',
				}}
			>
				{title}
			</Text>
			<Text
				sx={{
					mt: 2,
					fontFamily: 'body',
					fontSize: 3,
					fontWeight: 'text',
					color: 'text',
				}}
			>
				{body}
			</Text>
		</Box>
	);
};

const Achievements = () => {
	return (
		<Container containerSx={{ backgroundColor: 'backgroundSecondary' }}>
			<Flex
				sx={{
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{bullets.map((item) => (
					<Item
						key={shortid.generate()}
						title={item.title}
						body={item.body}
					/>
				))}
			</Flex>
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
