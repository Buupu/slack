import {
  Button,
  Flex,
  SimpleGrid,
  Text,
  Icon,
  Avatar,
  AvatarBadge
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';

export default function Header() {
  return (
    <Flex w="100%" p={1.5} bg="teal.900">
      <SimpleGrid w="full" columns={3} spacing={0}>
        <Flex w="full" align="center" justify="flex-end" px={6}>
          <Icon as={BiTime} h="22px" w="22px" color="white" />
        </Flex>
        <Flex align="center">
          <Button
            colorScheme="blackAlpha"
            justifyContent="space-between"
            size="xs"
            w="full"
          >
            <Text>Search</Text>
            <Icon as={FiSearch} h="15px" w="15px" />
          </Button>
        </Flex>
        <Flex w="full" align="center" justify="space-between" px={6}>
          <Icon h="18px" w="18px" color="white" />
          <Avatar h="30px" w="30px" borderRadius="5px">
            <AvatarBadge
              boxSize="15px"
              borderWidth="3px"
              bg="green.500"
              borderColor="teal.900"
            />
          </Avatar>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
