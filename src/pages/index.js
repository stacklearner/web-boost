/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Milestones from '../components/milestone/Milestones';
import Achievements from '../components/achievements';
import MainContent from '../components/main';
import Business from '../components/business';
import Footer from '../components/footer';

import getData from '../mapdata';

const Index = () => {
	const bullets = getData('bullets');

	return (
		<Layout>
			<Hero />
			<Milestones />
			<Achievements data={bullets} />
			<MainContent />
			<Business />
			<Footer />
		</Layout>
	);
};

export default Index;
