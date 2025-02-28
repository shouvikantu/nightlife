export default function GetInvolvedSection() {
  return (
    <div className="p-6 bg-white text-black h-full flex flex-col items-center">
      
      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">Get Involved</h1>

      {/* Two-Column Layout */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
        
        {/* Left Column - Partygoers */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Partygoers</h2>
          <p>
            Going to parties, you can inform us of your experience by emailing us! 
            Sharing anything, good or bad, about any event on or off the list is 
            incredibly helpful for us.{" "}
            <a href="#" className="text-blue-600 underline">Here</a> is a printable checklist to bring!
          </p>
        </div>

        {/* Right Column - Collectives, Venues, DJs */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Collectives // Venues // DJs</h2>
          <p>
            Email us to get listed and integrated into our network, driving eyes to you and 
            enabling opportunities for collaborations, connections, and shows sponsored by us.{" "}
            <a href="#" className="text-blue-600 underline">Here</a> is a summary of expectations we hold you to.
          </p>
          <p className="mt-4">
            DJs are also encouraged to submit their experiences through email.
          </p>
        </div>
      </div>

      {/* Hint Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold">Hint!</h3>
        <p className="text-lg">Either way, email</p>
        <p className="text-3xl md:text-4xl font-bold mt-2 text-black">
          admin@betternightlife.org
        </p>
      </div>
      
    </div>
  );
}
