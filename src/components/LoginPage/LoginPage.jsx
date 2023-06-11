import { NavLink } from 'react-router-dom';
import { Form, Input, Label, Button } from './LoginPage.module';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title=""
          required
          placeholder="Enter email ..."
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title=""
          required
          placeholder="Enter password ..."
        />
      </Label>
      <Button type="submit">LogIn</Button>
      <NavLink to="/register">Don`t have acount? Register</NavLink>
    </Form>
  );
};

export default LoginPage;
