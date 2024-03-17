import { useEffect, useState } from "react";
import ParkArea, { RoadArea } from "../ParkArea";

type data = {
  index: number;
  id: string;
  status: boolean;
};

export default function Layout1() {
  // function to print dummy data
  const [data, setData] = useState<data[]>([]);
  useEffect(() => {
    setData([]);
    for (let i = 1; i <= 62; i++) {
      const entry = {
        index: i,
        id: "A" + i,
        status: Math.random() < 0.5,
      };
      setData((prev) => [...prev, entry]);
    }
  }, []);

  return (
    // main Layout
    <section
      className=" gridPark grid h-full w-max rounded-md
        border-2 border-primary
        "
    >
      {/* section top */}
      {data.map((item) => {
        if (item.index < 17) {
          if (item.index === 16)
            return (
              <ParkArea
                id={item.id}
                status={item.status}
                dottedborder="border-none"
              />
            );
          else {
            return <ParkArea id={item.id} status={item.status} />;
          }
        }
      })}
      {/* road1 */}
      {Array(16)
        .fill(null)
        .map((_, index) => {
          if (index === 15) {
            return <RoadArea entry />;
          }
          return <RoadArea />;
        })}
      {/* section2 */}
      <RoadArea />
      <div className=" col-span-15 flex border-b-2 border-l-2 border-primary">
        {data.map((item) => {
          if (item.index < 32 && item.index > 16) {
            if (item.index === 31)
              return (
                <ParkArea
                  id={item.id}
                  status={item.status}
                  dottedborder="border-none"
                />
              );
            else {
              return <ParkArea id={item.id} status={item.status} />;
            }
          }
        })}
      </div>
      <RoadArea />
      <div className=" col-span-15 flex border-l-2">
        {data.map((item) => {
          if (item.index < 47 && item.index > 31) {
            if (item.index === 46)
              return (
                <ParkArea
                  id={item.id}
                  status={item.status}
                  dottedborder="border-none"
                />
              );
            else {
              return <ParkArea id={item.id} status={item.status} />;
            }
          }
        })}
      </div>

      {/* road1 */}
      {Array(16)
        .fill(null)
        .map((_, index) => {
          if (index === 15) {
            return <RoadArea exit />;
          }
          return <RoadArea />;
        })}
      {data.map((item) => {
        if (item.index <= 62 && item.index > 46) {
          if (item.index === 62)
            return (
              <ParkArea
                id={item.id}
                status={item.status}
                dottedborder="border-none"
              />
            );
          else {
            return <ParkArea id={item.id} status={item.status} />;
          }
        }
      })}
    </section>
  );
}
