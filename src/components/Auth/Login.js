import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Form, FormField, Box, Button, Paragraph } from "grommet";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";

export class Login extends PureComponent {
  state = { email: "", password: "" };

  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string,
      status_code: PropTypes.number
    })
  };

  onSubmit = ({ value: { email, password } }) =>
    this.props.dispatch(login({ email, password }));

  render() {
    const { error } = this.props;
    return (
      <Box width="medium">
        <h2>Login</h2>
        {error.status_code === 401 && (
          <Paragraph color="status-critical">Invalid credentials</Paragraph>
        )}
        <Form onSubmit={this.onSubmit}>
          <FormField label="Email" name="email" type="email" required />
          <FormField
            label="Password"
            name="password"
            type="password"
            required
          />

          <Box
            pad="large"
            direction="row"
            justify="center"
            margin={{ top: "medium" }}
          >
            <Button type="submit" label="Log in" primary />
          </Box>
        </Form>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
});

export default connect(mapStateToProps)(Login);
