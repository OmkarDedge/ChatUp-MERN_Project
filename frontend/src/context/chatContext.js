import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    if (userInfo) {
      setUser(userInfo);
      history.push("/chats");
    } else {
      history.push("/");
    }
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        setUser,
        user,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        setNotification,
        notification,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
