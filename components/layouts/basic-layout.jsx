import { Container } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

function BasicLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="sm">{children}</Container>
      <Footer />
    </>
  );
}

export default BasicLayout;
