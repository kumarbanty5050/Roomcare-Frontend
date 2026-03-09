export default function TailwindTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-red-700">
          Tailwind is Working 🎉
        </h1>
        <p className="mt-4 text-red-600">
          Roomcare frontend is ready for production UI.
        </p>
        <button className="mt-6 px-6 py-3 rounded-full bg-red-600 text-white hover:bg-indigo-700 transition">
          Continue
        </button>
      </div>
    </div>
  );
}
