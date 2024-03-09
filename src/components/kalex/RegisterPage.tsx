import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
  const submission = (e: any) => {
    e.preventDefault();
  };
  return (
    <body className="flex h-screen w-screen items-center justify-between px-2">
      <div className="hidden h-[98vh] w-[48vw] rounded-lg bg-muted lg:block"></div>
      <div className="flex h-[98vh] w-full flex-col items-center justify-between py-8 lg:w-[48vw]">
        <img src="/Kalexlogo.png" className="h-10" />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center">
            <div className="text-3xl">Create a New Account</div>
            <h4 className="text-primary">
              Enter your credentials below to create your account
            </h4>
          </div>
          <form
            id="register-form"
            name="Register"
            className="flex grid-cols-2 flex-col gap-4 lg:grid lg:w-[40vw]"
            data-netlify="true"
            method="POST"
            onSubmit={submission}
          >
            <Input
              type="email"
              placeholder="email address"
              name="email"
              required
              aria-label="email"
              className=" text-card-foreground placeholder:text-input"
            />
            <Input
              type="text"
              placeholder="username"
              name="username"
              required
              aria-label="name"
              className=" text-card-foreground placeholder:text-input"
            />
            <Input
              type="text"
              placeholder="first_name"
              name="first_name"
              required
              aria-label="first_name"
              className=" text-card-foreground placeholder:text-input"
            />
            <Input
              type="text"
              placeholder="last_name"
              name="last_name"
              required
              aria-label="last_name"
              className=" text-card-foreground placeholder:text-input"
            />
            <Input
              type="password"
              placeholder="password"
              name="password"
              aria-label="password"
              className=" text-card-foreground placeholder:text-input"
            />
            <Input
              type="password"
              placeholder="confirm password"
              name="confirm_password"
              aria-label="confirm password"
              className=" text-card-foreground placeholder:text-input"
            />
            <Button type="submit" className="col-span-2 bg-foreground">
              <a href="/kalexAdminPanel">Create Account</a>
            </Button>
          </form>
          <h6 className="self-center text-green-500" id="Salerter"></h6>
          <h6 className="self-center text-red-500" id="Falerter"></h6>
        </div>
        <h6 className="text-xs text-primary">
          Already have an account in kalex ?
          <a className="font-bold text-foreground" href="/login">
            log in
          </a>
        </h6>
      </div>
    </body>
  );
};

export default RegisterPage;
