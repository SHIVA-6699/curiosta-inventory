import Button from "@components/Button";
import Typography from "@components/Typography";
import logo from "@assets/curiosta_logo.png";
import google_logo from "@assets/google_logo.png";
import Input from "@components/Input";
import FormControl from "@components/FormControl";
import { useSignal } from "@preact/signals";

const Signup = () => {
  const errorMessage = useSignal<string>("");
  const isLoading = useSignal<boolean>(false);

  const handleCreateUser = () => {};
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col justify-center items-center  w-full sm:w-1/4 ">
        <div className="flex flex-col  items-center gap-2.5 ">
          <img src={logo} alt="curiosta-logo" />
          <Typography size="h6/bold" className="text-center">
            IMS
          </Typography>
        </div>
        <div className="w-full p-4">
          <FormControl
            noValidate
            mode="onSubmit"
            className="flex flex-col gap-2"
            onSubmit={handleCreateUser}
          >
            <div class="flex justify-between items-center gap-2">
              <Input
                name="first_name"
                type="text"
                label="First Name"
                autocomplete="given-name"
                required={{ message: "First name is required!", value: true }}
                minLength={{
                  message: "Minimum 3 characters are required!",
                  value: 3,
                }}
                maxLength={20}
                placeholder="John"
              />

              <Input
                name="last_name"
                type="text"
                label="Last Name"
                required={{ message: "Last name is required!", value: true }}
                autocomplete="family-name"
                minLength={3}
                maxLength={20}
                placeholder={"Doe"}
              />
            </div>

            <Input
              name="email"
              type="email"
              label="Email address"
              autocomplete="email"
              required={{ message: "Email is required!", value: true }}
              placeholder={"example@gmail.com"}
              validator={(value) =>
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
                  ? "Invalid email!"
                  : true
              }
            />

            <Input
              name="password"
              type="password"
              label="Password"
              required={{ message: "Password is required!", value: true }}
              autocomplete="current-password"
              minLength={6}
              placeholder="Enter password"
            />

            <Button
              type="submit"
              variant="primary"
              className="mt-4"
              disabled={isLoading.value}
            >
              {isLoading.value ? "Loading..." : "Sign Up"}
            </Button>

            <Typography variant="error">{errorMessage}</Typography>
          </FormControl>
          <div className="text-center my-4">
            <Typography>or</Typography>
            <div className="p-1.5 rounded-lg border flex justify-center items-center my-2 ">
              <div className="justify-start items-center gap-1 inline-flex">
                <img className="w-9 h-8" src={google_logo} alt="google-logo" />
                <Typography size="body2/normal">Sign in with google</Typography>
              </div>
            </div>
            <Typography
              size="body1/normal"
              variant={"secondary"}
              className="text-center"
            >
              Have an account?{" "}
              <a
                href="/login"
                class="font-semibold leading-6 text-app-primary-600 hover:text-app-primary-500"
              >
                Login
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;