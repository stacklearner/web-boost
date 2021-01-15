/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import Container from '../common/Container';
import MilestoneItem from './MilestoneItem';

const milestoneSummary = {
	title: 'Learn with Agile Methodology',
	summary:
		'এই ওয়েবসাইটটি তৈরি করা হয়েছে সমস্ত বিগিনার প্রোগ্রামারদের জন্য যারা সঠিক গাইডলাইনের অভাবে বছরের পর বছর চেষ্টা করেও ভালো একজন ওয়েব ডেভেলপার হতে পারছেন না। Agile এবং Scrum মেনে আপনাদের জন্য তৈরি করা হয়েছে পুরো এক বছরের কারিকুলাম। যেখানে রয়েছে চারটা মাইলস্টোন এবং ত্রিশটা স্প্রিন্ট। এখন হয়তো টার্মস গুলো বুঝতে একটু কষ্ট হচ্ছে। পুরো ডকুমেন্ট পড়া শেষে আপনি সব কিছু নিজেই বুঝে যাবেন।',
	milestones: {
		one: {
			name: 'First Milestone',
			body:
				'মডার্ন ওয়েবসাইট ডিজাইন করার জন্য নিজেকে একজন দক্ষ ওয়েব ডিজাইনার হিসেবে গড়ে তোলা',
		},
		two: {
			name: 'Second Milestone',
			body:
				'ডাইনামিক ওয়েবসাইট ডিজাইনের জন্য জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাংগুয়েজটি আয়ত্ত করা',
		},
		three: {
			name: 'Third Milestone',
			body:
				'নোডজেস এবং এক্সপ্রেসের মাধ্যমে ডাইনামিক ওয়েবসাইট এবং এপিআই তৈরি করতে শেখা',
		},
		four: {
			name: 'Fourth Milestone',
			body:
				'ফ্রন্টেন্ডে রিয়্যাক্ট শেখার মাধ্যমে ফ্রন্টেন্ড ব্যাকেন্ড সহ ফুলস্ট্যাক ওয়েব অ্যাপলিকেশন তৈরি করা',
		},
	},
};

const Milestones = () => {
	console.log(milestoneSummary);
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
					{milestoneSummary.title}
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
					{milestoneSummary.summary}
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
					name={milestoneSummary.milestones.one.name}
					target={milestoneSummary.milestones.one.body}
					color='milestone1'
				/>
				<MilestoneItem
					count='2'
					name={milestoneSummary.milestones.two.name}
					target={milestoneSummary.milestones.two.body}
					color='milestone2'
				/>
				<MilestoneItem
					count='3'
					name={milestoneSummary.milestones.three.name}
					target={milestoneSummary.milestones.three.body}
					color='milestone3'
				/>
				<MilestoneItem
					count='4'
					name={milestoneSummary.milestones.four.name}
					target={milestoneSummary.milestones.four.body}
					color='milestone4'
				/>
			</Flex>
		</Container>
	);
};

export default Milestones;
