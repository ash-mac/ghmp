import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ALogin from "../components/Authentication/ALogin";
const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100% "
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontFamily="Work sans" color="black" align="center">
          IIT Ropar Admin Login
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="100%">Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ALogin />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
