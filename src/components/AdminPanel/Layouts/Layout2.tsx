import ParkArea, { RoadArea } from "../ParkArea";

export default function Layout2() {
  return (
    <section
      className=" gridPark grid h-full w-max rounded-md
        border-2 border-primary
        "
    >
      <RoadArea block />
      <ParkArea id="2" status={true} />
      <ParkArea id="3" status={true} />
      <ParkArea id="4" status={false} />
      <ParkArea id="5" status={true} />
      <ParkArea id="6" status={false} />
      <ParkArea id="7" status={false} />
      <ParkArea id="8" status={true} />
      <ParkArea id="9" status={true} />
      <ParkArea id="10" status={false} />
      <ParkArea id="11" status={false} />
      <ParkArea id="12" status={false} />
      <ParkArea id="13" status={true} />
      <ParkArea id="14" status={false} />
      <ParkArea id="16" status={false} dottedborder=" border-none" />
      <RoadArea block />
      <ParkArea id="17" status={false} dottedborder="border-b-2" />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <ParkArea id="18" status={true} dottedborder="border-b-2" />
      <ParkArea id="18" status={true} dottedborder="border-b-2" />
      <RoadArea />
      <div className=" col-span-12 flex border-x-2 border-b-2">
        <ParkArea id="44" status={false} />
        <ParkArea id="45" status={false} />
        <ParkArea id="46" status={false} />
        <ParkArea id="47" status={false} />
        <ParkArea id="48" status={false} />
        <ParkArea id="49" status={false} />
        <ParkArea id="50" status={true} />
        <ParkArea id="51" status={false} />
        <ParkArea id="52" status={false} />
        <ParkArea id="53" status={false} />
        <ParkArea id="53.5" status={true} />
        <ParkArea id="54" status={false} dottedborder="border-none" />
      </div>
      <RoadArea />
      <ParkArea id="19" status={false} dottedborder="border-b-2" />
      <ParkArea id="20" status={true} dottedborder="border-b-2" />
      <RoadArea />
      <div className=" col-span-12 flex border-x-2">
        <ParkArea id="56" status={false} />
        <ParkArea id="57" status={true} />
        <ParkArea id="58" status={true} />
        <ParkArea id="59" status={true} />
        <ParkArea id="60" status={false} />
        <ParkArea id="61" status={false} />
        <ParkArea id="62" status={false} />
        <ParkArea id="63" status={true} />
        <ParkArea id="64" status={false} />
        <ParkArea id="65" status={false} />
        <ParkArea id="53.5" status={true} />
        <ParkArea id="66" status={false} dottedborder="border-none" />
      </div>
      <RoadArea />
      <ParkArea id="29" status={false} dottedborder="border-b-2" />
      <ParkArea id="20" status={true} dottedborder="border-b-2" />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <RoadArea />
      <ParkArea id="18" status={true} dottedborder="border-b-2" />
      <RoadArea block />
      <ParkArea id="2" status={true} />
      <ParkArea id="3" status={true} />
      <ParkArea id="4" status={false} />
      <ParkArea id="5" status={true} />
      <RoadArea entry />
      <RoadArea exit border="border-l-2" />
      <ParkArea id="8" status={true} />
      <ParkArea id="9" status={true} />
      <ParkArea id="10" status={false} />
      <ParkArea id="11" status={false} />
      <ParkArea id="12" status={false} />
      <ParkArea id="13" status={true} />
      <ParkArea id="14" status={false} />
      <ParkArea id="16" status={false} dottedborder=" border-none" />
      <RoadArea block />
    </section>
  );
}
