import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
import { Typography } from "@mui/joy";
import MessageInput from "./MessageInput";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function MessagesPane() {
  // const [chatMessages, setChatMessages] = React.useState(chat.messages);
  const [textAreaValue, setTextAreaValue] = React.useState("");

  // React.useEffect(() => {
  //   setChatMessages(chat.messages);
  // }, [chat.messages]);

  const chatMessages = [
    { text: "Hello", sender: "You" },
    { text: "Hi", sender: "Them" },
  ];

  return (
    <Sheet
      sx={{
        flexGrow: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background-color: rgba(var(--callout-rgb), 0.5);",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: "scroll",
          flexDirection: "column-reverse",
        }}
      >
        <Stack spacing={2} sx={{ justifyContent: "flex-end" }}>
          {chatMessages.map((message: any, index: number) => {
            const isYou = message.sender === "You";
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                sx={{ flexDirection: isYou ? "row-reverse" : "row" }}
              >
                {/* TODO: move ternary conditional rendering */}
                {message.sender === "You" && (
                  <Avatar
                    src="https://i.pravatar.cc/40?img=2"
                    srcSet="https://i.pravatar.cc/80?img=2"
                    sx={{ maxWidth: "32px", maxHeight: "32px" }}
                  />
                )}
                {message.sender === "Them" && (
                  <Avatar sx={{ maxWidth: "32px", maxHeight: "32px" }}>
                    <SmartToyIcon color="primary" />
                  </Avatar>
                )}
                <Typography sx={{ paddingRight: "10px" }}>
                  {message.text}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => {
          const newId = chatMessages.length + 1;
          const newIdString = newId.toString();
          // setChatMessages([
          //   ...chatMessages,
          //   {
          //     id: newIdString,
          //     sender: "You",
          //     content: textAreaValue,
          //     timestamp: "Just now",
          //   },
          // ]);
        }}
      />
    </Sheet>
  );
}
