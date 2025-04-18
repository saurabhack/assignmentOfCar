import Card from "../components/Card";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      
      <div className="flex flex-col md:flex-row mt-10 px-4 gap-6">
        <aside className="w-full md:w-1/4 h-fit md:sticky top-24">
          <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
            <Filter />
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <Card />
        </main>
      </div>
    </>
  );
}

export default Home;
