import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
    // 
    constructor(setStateFunc, createClientMessage, config) {
      this.config = config
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleHello = () => {
        const message = createChatBotMessage('Hello. Nice to meet you.');
    
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));

        console.log(message,'mess')
        console.log(this.config)
      }
  }

  
  
  export default ActionProvider;