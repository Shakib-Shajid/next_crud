import Details from "@/components/Details";

export default function Home() {
  return (
    <div className="pt-24">
      <div className="text-center rounded-full border-violet-600 border-2 flex flex-col items-center w-[80%] mx-auto p-24">
        <h3 className="text-3xl font-bold bg-teal-600 text-black inline-block p-5 rounded-3xl w-[40%] mb-20">This is CRUD in Next JS</h3>
        <Details />
      </div>
    </div>
  );
}

