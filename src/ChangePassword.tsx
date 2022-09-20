import React from "react";
import { Button, Paper, Typography, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { Password } from "./components/Password";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface IFormInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const defaultValues = {
  email: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: ""
};

const invalidPasswordFormatErrorMessage =
  "Password must contain at least 8 characters, one uppercase, one number and one special case character";
const schema = Yup.object().shape({
  currentPassword: Yup.string().required("Please enter your current password"),
  newPassword: Yup.string()
    .notOneOf(
      [Yup.ref("currentPassword"), null],
      "Old password and new password are same"
    )
    .required("Please enter your new password")
    // .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      invalidPasswordFormatErrorMessage
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Password does not match")
    .required("Please enter new password again")
});

export const ChangePassword = () => {
  const { handleSubmit, reset, control } = useForm<IFormInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <Paper
      sx={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "120px"
      }}
    >
      <Typography variant="h6"> Change Password Demo</Typography>
      <Typography variant="subtitle1"> with yup validation</Typography>
      <Divider />
      <Password
        name={"currentPassword"}
        label={"Current Password"}
        control={control}
      />
      <Password name={"newPassword"} label={"New Password"} control={control} />
      <Password
        name={"confirmPassword"}
        label={"Confirm Password"}
        control={control}
      />
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Update
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </Paper>
  );
};
