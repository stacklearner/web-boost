/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import Container from '../common/Container';
import MilestoneItem from './MilestoneItem';

const Milestones = () => {
	return (
		<Container
			containerSx={{ marginTop: 250, paddingTop: 20, paddingBottom: 20 }}
		>
			<Box sx={{ textAlign: 'center' }}>
				<Text
					sx={{
						color: 'title',
						fontFamily: 'heading',
						fontWeight: 'heading',
						fontSize: 6,
						marginBottom: 4,
					}}
				>
					Learn with Agile Methodology
				</Text>
				<Text
					sx={{
						color: 'subtitle',
						fontFamily: 'body',
						fontWeight: 'body',
						fontSize: 4,
						marginBottom: 5,
					}}
				>
					এই ওয়েবসাইটটি তৈরি করা হয়েছে সমস্ত বিগিনার প্রোগ্রামারদের
					জন্য যারা সঠিক গাইডলাইনের অভাবে বছরের পর বছর চেষ্টা করেও
					ভালো একজন ওয়েব ডেভেলপার হতে পারছেন না। Agile এবং Scrum মেনে
					আপনাদের জন্য তৈরি করা হয়েছে পুরো এক বছরের কারিকুলাম। যেখানে
					রয়েছে চারটা মাইলস্টোন এবং ত্রিশটা স্প্রিন্ট। এখন হয়তো টার্মস
					গুলো বুঝতে একটু কষ্ট হচ্ছে। পুরো ডকুমেন্ট পড়া শেষে আপনি সব
					কিছু নিজেই বুঝে যাবেন।
				</Text>
			</Box>
			<Flex
				sx={{
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<MilestoneItem
					count='1'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone1'
				/>
				<MilestoneItem
					count='2'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone2'
				/>
				<MilestoneItem
					count='3'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone3'
				/>
				<MilestoneItem
					count='4'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone4'
				/>
			</Flex>
		</Container>
	);
};

export default Milestones;
