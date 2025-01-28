import { useCallback, useState } from "react";

import { Typography, Grid2 } from "@mui/material";
import { Button } from "@mui/joy";
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";
import Snackbar from "@mui/joy/Snackbar";
import emailjs from "@emailjs/browser";

import Page from "../../components/page";

type Message = {
  text: string;
  color: "primary" | "neutral" | "danger" | "success" | "warning";
  open: boolean;
};

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email_from: HTMLInputElement;
  message: HTMLInputElement;
}
interface ContactMeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const Contactme = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message>({
    text: "",
    color: "warning",
    open: false,
  });

  const handleOpen = useCallback((newState: Message) => {
    setMessage({ ...newState, open: true });
  }, []);

  const handleClose = () => {
    setMessage({ ...message, open: false });
  };

  const submitEmail = (e: React.FormEvent<ContactMeFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          handleOpen({
            text: "Email sent successfully!",
            color: "success",
            open: true,
          });
        },
        (error) => {
          handleOpen({
            text: `Failed to send email. ${error.text}`,
            color: "danger",
            open: true,
          });

          setLoading(false);
        }
      );
  };

  return (
    <Page>
      <Typography variant="h3">Contact me</Typography>
      <form onSubmit={submitEmail}>
        <Grid2
          container
          gap={8}
          direction="column"
          sx={{ width: "100%", padding: 10 }}
        >
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Name</Typography>
            <Input name="name" id="name" variant="solid" fullWidth />
          </Grid2>
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Email Adress</Typography>
            <Input
              type="email"
              name="email_from"
              id="email_from"
              variant="solid"
              fullWidth
            />
          </Grid2>
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Message</Typography>
            <Textarea
              name="message"
              id="message"
              maxRows={20}
              sx={{ width: "100%", height: "30vh" }}
              variant="solid"
            />
          </Grid2>
          <Grid2
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button type="submit" disabled={loading}>
              Send
            </Button>
          </Grid2>
        </Grid2>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color={message.color}
        variant="solid"
        open={message.open}
        onClose={handleClose}
      >
        {message.text}
      </Snackbar>
    </Page>
  );
};
export default Contactme;
