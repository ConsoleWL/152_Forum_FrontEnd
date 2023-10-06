const MessageObjForDisplay = ({ message }) => {
  console.log(message);
  return (
    <tr>
      <td>{message.text}</td>
    </tr>
  );
};

export default MessageObjForDisplay;
