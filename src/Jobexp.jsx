import { useState } from "react";

function Job({ companyName, position, workDate }) {
  return (
    <div className="space-y-1 rounded-lg px-4 py-3">
      <p className="text-sm text-gray-900">{companyName}</p>
      <p className="text-sm text-gray-900">{position}</p>
      <p className="text-sm text-gray-500">{workDate}</p>
    </div>
  );
}

export default function Jobexp() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [workDate, setWorkDate] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Pengalaman Kerja
      </h2>
      <div>
        {submit ? (
          <>
            <Job
              companyName={companyName}
              position={position}
              workDate={workDate}
            />
            <button
              onClick={() => {
                setSubmit(false);
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
                htmlFor="companyName"
                className="text-sm font-medium text-gray-600"
              >
                Nama Perusahaan
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="position"
                className="text-sm font-medium text-gray-600"
              >
                Posisi
              </label>
              <input
                id="position"
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="workDate"
                className="text-sm font-medium text-gray-600"
              >
                Tanggal Mulai Kerja
              </label>
              <input
                id="workDate"
                type="date"
                value={workDate}
                onChange={(e) => setWorkDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
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
