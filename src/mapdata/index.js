import data from '../data/data.json';

const getData = (key) => {
	const keys = [
		'site',
		'trailer',
		'milestoneSummary',
		'bullets',
		'milestones',
		'business',
	];
	if (!keys.includes(key)) {
		throw new Error('Invalid Key');
	}
	return data[key];
};

export default getData;
