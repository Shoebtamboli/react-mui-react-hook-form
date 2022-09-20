import React from "react";
import { Button, Paper, Typography, Divider, FormGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "./components/FormInputText";
import { FormInputCheckbox } from "./components/FormInputCheckbox";
import { FormInputDropDown } from "./components/FormInputDropDown";
import { DevTool } from "@hookform/devtools";

interface IFormInput {
  billingAddress: boolean;
  deliveryAddress: boolean;
  street: string;
  postcode: string;
  city: string;
  country: any;
  addressDetails: string;
}

const defaultValues = {
  billingAddress: false,
  deliveryAddress: false,
  street: "",
  postcode: "",
  city: "",
  country: "",
  addressDetails: ""
};

const options = [
  {
    label: "Dropdown Option 1",
    value: "1"
  },
  {
    label: "Dropdown Option 2",
    value: "2"
  }
];

export const CreateAddress = () => {
  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
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
        <Typography variant="h6"> Create New Address Demo</Typography>
        <Typography variant="subtitle1">
          {" "}
          with react-hook standard validation
        </Typography>
        <Divider />
        <FormGroup row>
          <FormInputCheckbox
            control={control}
            setValue={setValue}
            name={"billingAddress"}
            label={"Billing Address"}
            required
          />
          <FormInputCheckbox
            control={control}
            setValue={setValue}
            name={"deliveryAddress"}
            label={"Delivery Address"}
          />
        </FormGroup>
        <FormInputText
          name="street"
          control={control}
          label="Street"
          required
        />
        <FormInputText name="postcode" control={control} label="Postcode" />
        <FormInputText name="city" control={control} label="City" />
        <FormInputDropDown
          name="country"
          control={control}
          label="Country"
          options={options}
        />
        <FormInputText
          name="addressDetails"
          control={control}
          label="Address Details"
        />

        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
          Save
        </Button>
        <Button onClick={() => reset()} variant={"outlined"}>
          Reset
        </Button>
      </Paper>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};
