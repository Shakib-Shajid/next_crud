import Details from "@/components/Details";

export default function Home() {
  return (
    <div className="pt-24">
      <div className="text-center rounded-full border-violet-600 border-2 flex flex-col items-center w-[80%] mx-auto p-24">
        <h3 className="text-3xl font-bold text-black inline-block p-5 rounded-3xl w-[55%] mb-20 bg-teal-600 
               bg-hover-slow-transition transition duration-1500">
          This is CRUD Operation By Next JS
        </h3>
        <Details />
      </div>
    </div>
  );
}

