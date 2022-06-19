import { createChatBotMessage } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

const botName = 'Helper Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;