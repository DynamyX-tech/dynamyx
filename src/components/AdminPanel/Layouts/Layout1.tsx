import ParkArea, { RoadArea } from "../ParkArea";

export default function Layout1() {
  return (
    <section
      className=" gridPark grid h-full w-max rounded-md
        border-2 border-primary
        "
    >
      <ParkArea id="1" status={true} />
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
      <ParkArea id="15" status={false} />
      <ParkArea id="16" status={false} dottedborder=" border-none" />
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
      <RoadArea />
      <RoadArea entry />
      {/* section2 */}
      <RoadArea />
      <div className=" col-span-15 flex border-b-2 border-l-2 border-primary">
        <ParkArea id="33" status={false} />
        <ParkArea id="34" status={false} />
        <ParkArea id="35" status={true} />
        <ParkArea id="36" status={true} />
        <ParkArea id="37" status={true} />
        <ParkArea id="38" status={false} />
        <ParkArea id="39" status={false} />
        <ParkArea id="40" status={true} />
        <ParkArea id="41" status={false} />
        <ParkArea id="42" status={false} />
        <ParkArea id="42.5" status={true} />
        <ParkArea id="43" status={true} />
        <ParkArea id="44" status={false} />
        <ParkArea id="45" status={false} />
        <ParkArea id="46" status={false} dottedborder="border-none" />
      </div>
      <RoadArea />
      <div className=" col-span-15 flex border-l-2">
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
        <ParkArea id="54" status={false} />
        <ParkArea id="55" status={false} />
        <ParkArea id="56" status={true} />
        <ParkArea id="54" status={true} dottedborder="border-none" />
      </div>
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
      <RoadArea />
      <RoadArea exit />
      <ParkArea id="17" status={true} />
      <ParkArea id="18" status={true} />
      <ParkArea id="19" status={true} />
      <ParkArea id="20" status={false} />
      <ParkArea id="21" status={true} />
      <ParkArea id="22" status={false} />
      <ParkArea id="23" status={true} />
      <ParkArea id="24" status={false} />
      <ParkArea id="25" status={true} />
      <ParkArea id="26" status={true} />
      <ParkArea id="27" status={true} />
      <ParkArea id="28" status={false} />
      <ParkArea id="29" status={false} />
      <ParkArea id="30" status={false} />
      <ParkArea id="31" status={true} />
      <ParkArea id="32" status={false} dottedborder=" border-none" />
    </section>
  );
}
