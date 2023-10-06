import MessageObjForDisplay from "./MessageObjForDisplay";

const DirectMessagesUser = ({ messages }) => {
  console.log(messages);
  const messageItem = messages.map((message) => {
    <MessageObjForDisplay message={message} />;
  });
  return (
    <div>
      <h2>Direct Message with particular user</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Messages</th>
            </tr>
          </thead>
          <tbody>{messageItem}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DirectMessagesUser;
