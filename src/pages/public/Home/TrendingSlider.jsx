import PropertyCard from "../../../components/common/PropertyCard";
import SectionTitle from "../../../components/common/SectiionTitle";
import { trendingProperties } from "../../../data/properties";

export default function TrendingSlider() {
  return (
    <section className=" mx-auto px-4 py-4">
      <SectionTitle
        title="Trending Hostels Near You"
        subtitle="Popular stays students love"
      />

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
        {trendingProperties.map((property) => (
          <div key={property.id} className="snap-start">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </section>
  );
}
