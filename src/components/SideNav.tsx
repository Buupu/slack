import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon
} from '@chakra-ui/react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { RiAddFill } from 'react-icons/ri';
export default function SideNav() {
  return (
    <Box
      w="300px"
      h="100%"
      bg="teal.800"
      position="relative"
      transform={['translateX(-100%)', 'translateX(-100%)', 'translateX(0%)']}
    >
      <Button
        w="full"
        py={2}
        px={3}
        borderY="1px"
        borderColor="teal.700"
        bg="transparent"
        borderRadius="none"
        justifyContent="space-between"
        _hover={{ bg: 'teal.900' }}
      ></Button>
      <Button
        w="full"
        py={2}
        px={3}
        bg="transparent"
        borderRadius="none"
        justifyContent="flex-start"
        _hover={{ bg: 'transparent', color: 'white' }}
        color="whiteAlpha.600"
        alignItems="center"
      >
        <Icon as={HiOutlineDotsVertical} mr={2} height="18px" w="18px" />
        Browse Slack
      </Button>
      <Accordion allowMultiple color="whiteAlpha.600">
        <AccordionItem border="none">
          <h2>
            <AccordionButton
              role="group"
              _hover={{ bg: 'transparent' }}
              alignItems="center"
              justifyContent="space-between"
            >
              <AccordionIcon ml={-1} mr={2} />
              <Box flex="1" textAlign="left">
                Channels
              </Box>
              <Flex
                _groupHover={{ color: 'whiteAlpha.600' }}
                color="transparent"
              >
                <Icon as={RiAddFill} h="25px" w="25px" />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none">
          <h2>
            <AccordionButton
              role="group"
              _hover={{ bg: 'transparent' }}
              alignItems="center"
              justifyContent="space-between"
            >
              <AccordionIcon ml={-1} mr={2} />
              <Box flex="1" textAlign="left">
                Direct messages
              </Box>
              <Flex
                _groupHover={{ color: 'whiteAlpha.600' }}
                color="transparent"
              >
                <Icon as={RiAddFill} h="25px" w="25px" />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
