/** @jsx jsx */
import { jsx } from 'theme-ui';
import Flex from '../common/Flex';
import FlexCentered from '../common/FlexCentered';
import Heading from '../common/Heading';
import Text from '../common/Text';

const MilestoneItem = ({ count, name, target, color }) => {
	return (
		<Flex
			m={[0, 1, 1, 2, 2]}
			mt='4'
			width={['100%', '100%', '48%', '30%']}
			display='block'
		>
			<FlexCentered flexDirection='column'>
				<FlexCentered
					width='6rem'
					height='6rem'
					backgroundColor={color}
					borderRadius='50%'
					fontSize='5'
					fontFamily='heading'
					fontWeight='bold'
					color='white'
				>
					{count}
				</FlexCentered>
				<Heading as='h3' mt='4' textAlign='center'>
					{name}
				</Heading>
				<Text mt='3' fontFamily='bangla' textAlign='center'>
					{target}
				</Text>
			</FlexCentered>
		</Flex>
	);
};

export default MilestoneItem;
