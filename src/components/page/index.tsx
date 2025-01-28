import { ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "../Header";

type PageProps = {
  children: ReactNode;
};
const Page = ({ children }: PageProps) => {
  return (
    <Box width="100%" height="100%">
      <Header />
      <Box width="90vw" height="80vh">
        {children}
      </Box>
    </Box>
  );
};

export default Page;
