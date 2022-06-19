class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        if (message.includes('hello')) {
            console.log(this.actionProvider,message,'action');
            this.actionProvider.handleHello();
          }
    }
  }

  export default MessageParser; // this.actionProvider.handleHello();ca