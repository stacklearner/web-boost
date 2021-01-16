import assets from './assetmap';

export function getImage(name) {
	return assets.image[name] || assets.image.logo;
}

export function getIcon(name, mode = 'light') {
	return assets.icon[name][mode] || assets.icon.icon;
}

function getAsset(name, type, mode = 'light') {
	if (!['image', 'icon'].includes(type)) {
		throw new Error('Invalid Asset Type');
	}
	let result = null;
	if (type === 'icon') {
		result = assets[type][name][mode];
	} else {
		result = assets[type][name];
	}
	if (result) return result;

	return type === 'icon' ? assets['icon']['icon'] : assets['image']['logo'];
}

export default getAsset;
