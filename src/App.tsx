import * as React from "react";
import { Container, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Login } from "./Login";
import { CreateAddress } from "./CreateAddress";
import { ChangePassword } from "./ChangePassword";

const theme = createTheme({
  palette: {
    mode: "light"
  }
});

export default function App() {
  console.log("renders");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          sx={{
            paddingTop: "50px"
          }}
        >
          React Hook Form with Controller & MUI
        </Typography>
        <Typography variant="subtitle1" align="center">
          Option 2: use render props to assign events and value
        </Typography>

        <Login />
        <CreateAddress />
        <ChangePassword />
      </Container>
    </ThemeProvider>
  );
}
