import { ContainerScroll } from "@/components/ui/container-scroll-animation";
("use client");

export function HeroScrollDemo() {
  return (
    <div className="hidden flex-col overflow-hidden font-Inter md:flex">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-thin text-black dark:text-white">
              Maximize Parking Efficiency With
              <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Dynamic Dashboard
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/dashboard_MP.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
