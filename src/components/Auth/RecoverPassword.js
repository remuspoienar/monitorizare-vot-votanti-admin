import React, { PureComponent } from "react";
import { Form, FormField, Box, Button } from "grommet";

export default class RecoverPassword extends PureComponent {
  state = { email: "", password: "" };

  render() {
    return (
      <Box width="medium">
        <Form onSubmit={({ value }) => console.log("Submit", value)}>
          <FormField label="Email" name="email" type="email" required />

          <Box
            pad="large"
            direction="row"
            justify="center"
            margin={{ top: "medium" }}
          >
            <Button type="submit" label="Send recovery mail" primary />
          </Box>
        </Form>
      </Box>
    );
  }
}
