import Conversation from "../models/conversationalModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    res.status(200).send(newMessage);
  } catch (error) {
    console.log("Error in Send Message", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
