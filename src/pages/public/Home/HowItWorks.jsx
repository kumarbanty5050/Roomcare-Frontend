export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold mb-8 text-center">
        How Roomcare Works
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tenants */}
        <div>
          <h3 className="font-semibold mb-3">For Tenants</h3>
          <ol className="space-y-2 text-sm text-gray-600">
            <li>1. Search properties</li>
            <li>2. Compare prices & facilities</li>
            <li>3. Book instantly</li>
          </ol>
        </div>

        {/* Owners */}
        <div>
          <h3 className="font-semibold mb-3">For Owners</h3>
          <ol className="space-y-2 text-sm text-gray-600">
            <li>1. List your property</li>
            <li>2. Manage rooms & tenants</li>
            <li>3. Receive payments</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
