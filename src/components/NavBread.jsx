import { Text, VStack } from '@chakra-ui/react';

function NavBread({ active, colorScheme }) {
	return (
		<VStack alignItems={'flex-start'} spacing={1} mt={12} ml={10} zIndex={1}>
			<Text color={colorScheme == 'light' ? '#fff' : 'gray.800'} fontSize={11}>
				Pages / {active}
			</Text>
			<Text color={colorScheme == 'light' ? '#fff' : '#000'} fontWeight={500} fontSize={17}>
				{active}
			</Text>
		</VStack>
	);
}

export default NavBread;
