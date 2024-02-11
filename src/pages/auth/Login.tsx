import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../../layouts/AuthLayout";
import { useFormik } from "formik";
import authService from "../../services/Auth/auth";
import { LoginRequest, LoginResponse } from "../../interfaces/interfaces";
import { useUserStore } from "../../zustand/useUserStore";
// import jwt from "jsonwebtoken";
import { useMemo } from "react";

export const Login = () => {
  const { loginUser } = useUserStore();

  const formik = useFormik<any>({
    initialValues: useMemo(() => {
      return {
        identifier: null,
        password: null,
      };
    }, []),
    onSubmit: (values: LoginRequest, { setSubmitting }) => {
      setSubmitting(true);
      authService.login(values).then((response: LoginResponse) => {
        try {
          if (response.jwt) {
            // const decodedToken: any = jwt.verify(
            //   response.jwt,
            //   "59725b45a009b443f57832d0aef4af9ff0aa197db2c9c390186e36c05085a52f25aa38fe36977a9f4adaca4813cbe76e176ae47ed0e85b96501fe33bbb50ad103d6000fa9753f1b8c6fb4ae8686c63947f2cb90051789b4cd2da23f1d19b63c19371e120e908aee6fa4e7ea7b7eb1226c529f08657e2905903e76f441a51aaa8"
            // );
            // console.log({ decodedToken });
            if (true) {
              //TODO

              authService
                .getUserById(response.user.id!)
                .then((responseUser) => {
                  const userWithAuth = { ...responseUser, isAuth: true };
                  loginUser(userWithAuth);
                });
            }
          }
        } catch (error: any) {}
      });
      setSubmitting(false);
    },
  });

  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              name="identifier"
              id="identifier"
              onChange={formik.handleChange}
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              name="password"
              id="password"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={formik.submitForm} fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/crear-cuenta"
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
