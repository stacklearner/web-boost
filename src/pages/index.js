/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Milestones from '../components/milestone/Milestones';
import Achievements from '../components/achievements';
import MainContent from '../components/main';

const Index = () => {
	return (
		<Layout>
			<Hero />
			<Milestones />
			<Achievements />
			<MainContent />
		</Layout>
	);
};

export default Index;
