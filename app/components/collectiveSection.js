import { useState } from "react";

const collectivesData = [
  { id: 1, name: "Collective A", city: "New York", state: "NY", nextEvent: "06/15/24 @ 8PM" },
  { id: 2, name: "Collective B", city: "Los Angeles", state: "CA", nextEvent: "06/18/24 @ 10PM" },
  { id: 3, name: "Collective C", city: "Chicago", state: "IL", nextEvent: "06/20/24 @ 7PM" },
  { id: 4, name: "Collective D", city: "Miami", state: "FL", nextEvent: "06/25/24 @ 9PM" },
  { id: 5, name: "Collective E", city: "Austin", state: "TX", nextEvent: "07/02/24 @ 6PM" },
  { id: 6, name: "Collective F", city: "Seattle", state: "WA", nextEvent: "07/10/24 @ 8PM" },
];

export default function CollectivesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("nearest");

  // Filter and sort collectives
  const filteredCollectives = collectivesData
    .filter((collective) =>
      `${collective.name} ${collective.city} ${collective.state}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "A-Z") return a.name.localeCompare(b.name);
      if (sortOption === "Z-A") return b.name.localeCompare(a.name);
      if (sortOption === "soonest") return new Date(a.nextEvent) - new Date(b.nextEvent);
      return 0;
    });

  return (
    <div className="p-6 bg-white text-black h-full flex flex-col">
      
      {/* Search Bar & Dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-full md:w-2/5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-black"
        />

        {/* Sorting Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="mt-4 md:mt-0 p-2 border border-gray-400 rounded-md bg-black text-white"
        >
          <option value="nearest">Nearest</option>
          <option value="soonest">Soonest Event</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>

      {/* Collectives Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {filteredCollectives.map((collective) => (
          <div
            key={collective.id}
            className="p-4 bg-black text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold">{collective.name}</h3>
            <p className="text-gray-300">{collective.city}, {collective.state}</p>
            <p className="text-sm mt-2">Next event:</p>
            <p className="text-md font-semibold">{collective.nextEvent}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
