import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "./components/FormInputText";
import { Password } from "./components/Password";
import { DevTool } from "@hookform/devtools";

interface IFormInput {
  email: string;
  password: string;
}

const defaultValues = {
  email: "",
  password: ""
};

export const Login = () => {
  const { handleSubmit, reset, control, watch } = useForm<IFormInput>({
    defaultValues: defaultValues
  });

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <>
      <Paper
        sx={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "120px"
        }}
      >
        <Typography variant="h6"> Login Form Demo</Typography>

        <FormInputText
          name="email"
          control={control}
          label="Email"
          type={"email"}
          required
        />
        <FormInputText
          name="password"
          control={control}
          label="Password"
          type={"password"}
          required
        />
        <Password
          name={"password"}
          label={"Password"}
          control={control}
          required
        />

        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
          Login
        </Button>
        <Button onClick={() => reset()} variant={"outlined"}>
          Reset
        </Button>
      </Paper>
    </>
  );
};
