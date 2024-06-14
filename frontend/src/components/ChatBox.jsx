import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChatState } from "../context/chatContext";
import SingleChats from "./SingleChats";
import "./ChatBox.css"; // Import the CSS file
import { useLocation } from "react-router-dom";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat, user } = ChatState();
  const location = useLocation();
  const [rerenderKey, setRerenderKey] = useState(0); // State to trigger re-render

  return (
    <Box
      key={rerenderKey} // Key prop to force rerender when changed
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDirection="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      id="chat-area-parent"
    >
      MyChat
      <SingleChats
        key={rerenderKey}
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
      />
    </Box>
  );
};

export default ChatBox;
