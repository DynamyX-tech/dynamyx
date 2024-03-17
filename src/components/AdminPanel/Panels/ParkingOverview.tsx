import Layout1 from "../Layouts/Layout1";
import Layout2 from "../Layouts/Layout2";

export default function ParkingOverview() {
  return (
    <main className="flex h-full w-full flex-col gap-4 pt-8">
      <section>
        <div className="w-max rounded-md bg-primary px-3 py-2 text-xs font-bold text-background">
          Level-0
        </div>
      </section>
      <section className="flex gap-4">
        <Layout1 />
      </section>
    </main>
  );
}
