import { useState } from "react";

function Biodata({ firstName, lastName, email, phoneNumber }) {
  return (
    <div className="space-y-1 rounded-lg px-4 py-3">
      <p className="text-sm text-gray-900">{firstName}</p>
      <p className="text-sm text-gray-900">{lastName}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-500">{phoneNumber}</p>
    </div>
  );
}

export default function Bio() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Submit data", firstName, email, phoneNumber);
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Biodata</h2>
      <div>
        {submitted ? (
          <>
            <Biodata
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
            />
            <button
              onClick={() => {
                setSubmitted(false);
              }}
              className="w-full border border-gray-400 rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Edit
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <section className="flex flex-col gap-1">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-600"
              >
                Nama Depan
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-600"
              >
                Nama Belakang
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-600"
              >
                No HP
              </label>
              <input
                id="phoneNumber"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <button
              type="submit"
              className="w-full border border-gray-400 rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
