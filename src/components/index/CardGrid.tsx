import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { PaintBucket } from "lucide-react";
import { useEffect } from "react";
const CardGrid = () => {
  useEffect(() => {
    const allCards = document.querySelectorAll(".card");
    let animation: Animation | null = null;
    const mouseHandler = (ev: MouseEvent) => {
      allCards.forEach((e) => {
        const blob = e.querySelector(".blob");
        const fblob = e.querySelector(".fakeblob");
        if (!blob || !fblob) return;
        const rec = fblob.getBoundingClientRect();
        animation = blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - rec.width / 2
              }px,${ev.clientY - rec.top - rec.height / 2}px)`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          },
        );
      });
    };
    window.addEventListener("mousemove", mouseHandler);

    return () => {
      window.removeEventListener("mousemove", mouseHandler);
      if (animation) animation.cancel();
    };
  }, []);
  return (
    <section id="About" className="container mx-auto px-4">
      <h2 className="mt-20 px-2 text-center text-4xl">What we are doing</h2>
      <div className="mt-12 flex w-full grid-cols-2 flex-col gap-5 lg:grid">
        <div className="card col-span-2">
          <Card className="inner flex w-full flex-col overflow-hidden lg:flex-row">
            <img
              src="https://placehold.co/600x400"
              className="md:my-4 md:rounded-r-xl"
              alt="placeholder"
            />
            <div>
              <CardHeader>
                <PaintBucket width={30} height={30} className="mb-5" />
                <CardTitle className="text-2xl">Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  illum nihil et corrupti quasi, incidunt iste asperiores, modi
                  quas eaque iure deserunt voluptatum ratione, ea omnis natus
                  qui nesciunt explicabo.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </div>
          </Card>
          <div className="blob"></div>
          <div className="fakeblob"></div>
        </div>
        <div className="card">
          <Card className="inner flex w-full flex-col overflow-hidden md:flex-row-reverse">
            <img
              src="https://placehold.co/600x400"
              className="rounded-tl-xl object-cover md:mt-5 md:w-1/2"
              alt="placeholder"
            />
            <div>
              <CardHeader>
                <PaintBucket width={30} height={30} className="mb-5" />
                <CardTitle className="text-2xl">Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="max-w-prose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  illum nihil et corrupti quasi, incidunt iste asperiores, modi
                  quas eaque iure deserunt voluptatum ratione, ea omnis natus
                  qui nesciunt explicabo.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </div>
          </Card>

          <div className="blob"></div>
          <div className="fakeblob"></div>
        </div>
        <div className="card">
          <Card className="inner flex h-full w-full">
            <div className="flex h-full flex-col justify-stretch">
              <CardHeader>
                <PaintBucket width={30} height={30} className="mb-5" />
                <CardTitle className="text-2xl">Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  illum nihil et corrupti quasi, incidunt iste asperiores, modi
                  quas eaque iure deserunt voluptatum ratione, ea omnis natus
                  qui nesciunt explicabo.
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button>Learn More</Button>
              </CardFooter>
            </div>
          </Card>
          <div className="blob"></div>
          <div className="fakeblob"></div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
