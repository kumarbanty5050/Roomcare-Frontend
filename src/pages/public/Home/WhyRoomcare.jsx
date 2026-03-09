import { ShieldCheck, Wallet, CalendarCheck, Lock } from "lucide-react";

const features = [
  { icon: ShieldCheck, text: "Verified Properties" },
  { icon: Wallet, text: "No Brokerage" },
  { icon: CalendarCheck, text: "Easy Online Booking" },
  { icon: Lock, text: "Secure Payments" },
];

export default function WhyRoomcare() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-8 text-center">
          Why Roomcare?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="bg-pink-100 p-4 rounded-2xl">
                <Icon className="text-pink-700" />
              </div>
              <p className="text-sm font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
