import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/InputNew";
import { cn } from "@/lib/utils";
import { useState } from "react";

const RegisterPage = () => {
  const [page, setPage] = useState<string>("question");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
    state: "",
    city: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const QuestionPage = () => {
    return (
      <main className="flex flex-col items-center justify-center gap-6">
        <img src="/Kalexlogo.png" className="h-10 w-max" />
        <h1 className=" text-center text-lg font-bold text-primary">
          Hey User!{" "}
          <span className=" font-normal">
            Before getting started <br></br>kalex answer this question
          </span>
        </h1>
        <div className="flex flex-col gap-2 rounded-xl border px-48 py-12">
          <h4 className=" text-xl">Are you a parking spot owner?</h4>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-secondary  font-medium "
            type="submit"
            onClick={() => setPage("primary")}
          >
            Yes
            <BottomGradient />
          </button>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-secondary  font-medium "
            type="submit"
          >
            No
            <BottomGradient />
          </button>
        </div>
      </main>
    );
  };
  const PrimaryReg = () => {
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   const formData = new FormData(e.currentTarget);
    //   // const data = Object.fromEntries(formData.entries());
    //   console.log(formData);
    //   console.log("Form submitted");
    // };
    return (
      <div className="mx-auto w-full max-w-md rounded-none p-4 shadow-input md:rounded-2xl md:p-8 ">
        <div className="flex h-max w-full items-center justify-center py-4">
          <img src="/Kalexlogo.png" className="h-10 w-max" />
        </div>
        <p className="mt-2 max-w-sm text-center text-sm">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <form className="my-8">
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <LabelInputContainer>
              <Label htmlFor="firstname" className=" text-foreground">
                First name
              </Label>
              <input
                id="firstname"
                placeholder="Tyler"
                type="text"
                className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
                required
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                }}
              />
              <BottomGradient />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className=" text-foreground">
                Last name
              </Label>
              <input
                id="lastname"
                placeholder="Durden"
                type="text"
                className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
                // value={formData.lastName}
                // required
                // onChange={(e) => {
                //   setFormData({ ...formData, lastName: e.target.value });
                // }}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className=" text-foreground">
              Username
            </Label>
            <input
              id="username"
              type="text"
              placeholder="kannanaksh"
              className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
              // value={formData.username}
              // required
              // onChange={(e) => {
              //   setFormData({ ...formData, username: e.target.value });
              // }}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className=" text-foreground">
              Country
            </Label>
            <input
              id="country"
              type="text"
              placeholder="India"
              className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
              // value={formData.country}
              // onChange={(e) => {
              //   setFormData({ ...formData, country: e.target.value });
              // }}
            />
          </LabelInputContainer>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <LabelInputContainer>
              <Label htmlFor="firstname" className=" text-foreground">
                State
              </Label>
              <input
                id="state"
                placeholder="kerala"
                type="text"
                className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
                // value={formData.state}
                // onChange={(e) => {
                //   setFormData({ ...formData, state: e.target.value });
                // }}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className=" text-foreground">
                City
              </Label>
              <input
                id="city"
                placeholder="Attingal"
                type="text"
                className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
                // value={formData.city}
                // onChange={(e) => {
                //   setFormData({ ...formData, city: e.target.value });
                // }}
              />
            </LabelInputContainer>
          </div>
          <button
            className="group/btn relative block h-10 w-full rounded-md "
            type="submit"
            // onClick={() => setPage("secondary")}
          >
            Continue &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    );
  };
  const SecondaryReg = () => {
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   console.log("Form submitted");
    // };
    return (
      <div className="mx-auto w-full max-w-md rounded-none p-4 shadow-input md:rounded-2xl md:p-8 ">
        <div className="flex h-max w-full items-center justify-center py-4">
          <img src="/Kalexlogo.png" className="h-10 w-max" />
        </div>
        <p className="mt-2 max-w-sm text-center text-sm">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <form className="my-8">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className=" text-foreground">
              PhoneNumber
            </Label>
            <input
              id="phonenumber"
              placeholder="9995176200"
              type="text"
              value={formData.phoneNumber}
              className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e.target.value });
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className=" text-foreground">
              Email Address
            </Label>
            <input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className=" text-foreground">
              Password
            </Label>
            <input
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword" className=" text-foreground">
              Confirm Password
            </Label>
            <input
              id="twitterpassword"
              placeholder="••••••••"
              type="twitterpassword"
              className=" flex h-10 w-full rounded-md border-none bg-secondary px-2 font-normal text-foreground placeholder:text-muted"
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md "
            type="submit"
            onClick={() => {
              setPage("question");
              console.log(formData);
            }}
          >
            Continue &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    );
  };
  //main
  {
    if (page === "question") {
      return <QuestionPage />;
    }
    if (page === "primary") {
      return <PrimaryReg />;
    }
    if (page === "secondary") {
      return <SecondaryReg />;
    }
  }
};

export default RegisterPage;
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
