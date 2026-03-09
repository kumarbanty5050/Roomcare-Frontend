const locations = [
  { city: "Ranchi", image: "https://images.unsplash.com/photo-1503264116251-35a269479413" },
  { city: "Patna", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { city: "Hazaribagh", image: "https://images.unsplash.com/photo-1494526585095-c41746248156" },
];

export default function FeaturedLocations() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold mb-6">Featured Locations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {locations.map((loc) => (
          <div
            key={loc.city}
            className="relative rounded-2xl overflow-hidden h-40 cursor-pointer"
          >
            <img
              src={loc.image}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <span className="text-white font-semibold text-lg">
                {loc.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
