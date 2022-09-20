# REACT-HOOK_FORM

## Register fields

import the useForm Hook:
use the Hook inside the component:

```
<input type="text" ref={register} name="firstName" />
```

## The Controller component

React Hook Form includes a wrapper component called Controller to work with component libraries where you can’t access the ref directly.
Skeleton of Controller component

```
<Controller
  control={control}
  name="test"
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => ( WHATEVER_INPUT_WE_WANT )}
/>
```

{/_ Option 1: pass a component to the Controller. _/}

{/_ Option 2: use render props to assign events and value _/}
