import { ChatEngine } from 'react-chat-engine';

const ChatsPage = (props) => {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="c9e0d3a6-e12a-4081-89e0-08d60f4f5f81"
        userName={props.user.username}
        userSecret={props.user.secret}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
};

export default ChatsPage;