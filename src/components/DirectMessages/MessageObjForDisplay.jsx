const MessageObjForDisplay = ({ message }) => {
  console.log(message);
  return (
    <tr>
      <td>{message.userIdToName}</td>
      <td>{message.text}</td>
    </tr>
  );
};

export default MessageObjForDisplay;
