import data from '../data/data.json';

const getData = (key) => {
	const keys = ['sites', 'milestoneSummary', 'bullets', 'milestones'];
	if (!keys.includes(key)) {
		throw new Error('Invalid Key');
	}
	return data[key];
};

export default getData;
