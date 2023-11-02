import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function TestimonialUser() {
  return (
    <div className="flex items-center gap-5">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold">Shad Mirza</h3>
        <p className="text-sm text-gray-500">Software Engineer</p>
      </div>
    </div>
  );
}
