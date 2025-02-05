import Image from "next/image";
import logo from "../../public/logo2.svg";

export default function HomeSection() {
  return (
    <div className="p-6 bg-black text-white h-full flex items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Large Centered Logo & Project Description (Takes More Width) */}
        <div className="md:w-2/3 flex flex-col justify-center items-center text-center md:text-left">
          <Image src={logo} alt="Logo" width={150} height={150} className="mb-6" />

          <h2 className="text-lg font-medium">
            The <span className="font-bold">Better Nightlife Project</span>
          </h2>
          <p className="text-md mt-2 leading-relaxed max-w-lg">
            Verifies that collectives and the spaces that host them are safe for everyone, 
            ethically treating their artists, and engaging with the local and international 
            community. We don’t police or regulate—we just provide a list of events where 
            you can have fun, worry-free.
          </p>
        </div>

        {/* Right Side: Upcoming Events (Takes Less Width) */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>
          <ul className="space-y-4">
            {/* Event Items */}
            {[
              { name: "Event 1", date: "Date", location: "@ Location", clickable: false },
              { name: "Event 2", date: "Date", location: "@ Location", clickable: false },
              { name: "Event 3", date: "Date", location: "@ Location", clickable: false },
              { name: "Event 4", date: "Date", location: "@ Location", clickable: false },
              { name: "Event 5", date: "Date", location: "@ Location", clickable: false },
              { name: "Event 6", date: "Date", location: "@ Location", clickable: false },
            ].map((event, index) => (
              <li key={index} className="grid grid-cols-2">
                {/* Event Name & Date */}
                <div>
                  {event.clickable ? (
                    <button className="text-red-500 underline font-bold">
                      {event.name}
                    </button>
                  ) : (
                    <strong>{event.name}</strong>
                  )}
                  <br />
                  {event.date}
                </div>
                {/* Location */}
                <div className="text-right">{event.location}</div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
