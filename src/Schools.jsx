import { useState } from "react";

function School({ schoolName, study, dateStudy }) {
  return (
    <div className="space-y-1 rounded-lg px-4 py-3">
      <p className="text-sm text-gray-900">{schoolName}</p>
      <p className="text-sm text-gray-900">{study}</p>
      <p className="text-sm text-gray-500">{dateStudy}</p>
    </div>
  );
}

export default function Schools() {
  const [schoolName, setSchoolName] = useState("");
  const [study, setStudy] = useState("");
  const [dateStudy, setDateStudy] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Riwayat Belajar
      </h2>
      <div>
        {submit ? (
          <>
            <School
              schoolName={schoolName}
              study={study}
              dateStudy={dateStudy}
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
                htmlFor="schoolName"
                className="text-sm font-medium text-gray-600"
              >
                Nama Sekolah
              </label>
              <input
                id="schoolName"
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="study"
                className="text-sm font-medium text-gray-600"
              >
                Jurusan
              </label>
              <input
                id="study"
                type="text"
                value={study}
                onChange={(e) => setStudy(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="dateStudy"
                className="text-sm font-medium text-gray-600"
              >
                Tahun Masuk
              </label>
              <input
                id="dateStudy"
                type="date"
                value={dateStudy}
                onChange={(e) => setDateStudy(e.target.value)}
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
