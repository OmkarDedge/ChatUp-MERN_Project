import React, { useEffect } from "react";
import {
  Box,
  Container,
  TabPanels,
  Tabs,
  Text,
  TabList,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Loging from "../components/Authentication/Loging";
import SignUp from "../components/Authentication/SignUp";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userInfo"));
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    console.log("User Info:", user);
    console.log("Has Reloaded:", hasReloaded);

    if (user) {
      history.push("/chats");
    } else if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      console.log("Reloading the page...");
      window.location.reload();
    }
  });

  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Chat-Up
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Loging />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
