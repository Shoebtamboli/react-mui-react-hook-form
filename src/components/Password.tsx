import { MouseEvent, useState } from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Password = ({
  name,
  control,
  label,
  required,
  options,
  validation = {},
  type
}: FormInputProps) => {
  const [password, setPassword] = useState<boolean>(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, ref },
        fieldState: { error }
        //formState: { errors }
      }) => {
        return (
          <TextField
            inputRef={ref}
            helperText={error ? error.message : null}
            size="medium"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
            required={required}
            InputProps={{
              endAdornment: (
                <InputAdornment position={"end"}>
                  <IconButton
                    onMouseDown={(e: MouseEvent<HTMLButtonElement>) =>
                      e.preventDefault()
                    }
                    onClick={() => setPassword(!password)}
                    tabIndex={-1}
                  >
                    {password ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            type={password ? "password" : "text"}
          />
        );
      }}
      rules={validation}
    />
  );
};
