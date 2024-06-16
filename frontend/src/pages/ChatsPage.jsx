import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ChatState } from "../context/chatContext";
import SideDrawer from "../components/misclleneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import "./ChatPage.css"; // Import the CSS file

const ChatsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { user, setUser, selectedChat, setSelectedChat } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("userInfo"));

    // Redirect to HomePage if no userInfo found in sessionStorage
    if (!storedUser) {
      history.push("/");
      return;
    }

    // Update user state if sessionStorage user differs from context user
    if (!user || (storedUser && storedUser._id !== user._id)) {
      setUser(storedUser);
    }
  }, [history, user, setUser]);

  useEffect(() => {
    // Ensure fetchAgain triggers a reload when selectedChat changes
    if (selectedChat) {
      setFetchAgain(!fetchAgain);
    }
  }, [selectedChat]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <div className="container">
        {user && (
          <>
            <div className="my-chats">
              <MyChats key={fetchAgain} fetchAgain={fetchAgain} />
            </div>
            <div className="chat-box">
              <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatsPage;
