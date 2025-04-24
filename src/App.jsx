import React, { useState } from "react";

const dorkCategories = [
  {
    name: "📸 Cameras",
    dorks: [
      'intitle:"Live View / - AXIS"',
      'inurl:view/view.shtml',
      'inurl:":8080" intext:"camera"',
    ],
  },
  {
    name: "🔐 Login Pages",
    dorks: [
      'intitle:"Login Page"',
      'inurl:/admin/login.php',
      'inurl:/userlogin.jsp',
    ],
  },
  {
    name: "📁 Sensitive Files",
    dorks: [
      'intitle:index.of passwd',
      'ext:sql | ext:dbf | ext:mdb',
      'ext:log inurl:"password"',
    ],
  },
  {
    name: "💻 Devices",
    dorks: [
      'intitle:"webcamXP 5"',
      'intitle:"IP Camera Viewer"',
      'inurl:top.htm inurl:currenttime',
    ],
  },
  {
    name: "🚨 Errors & Exposures",
    dorks: [
      '"PHP Parse error" | "PHP Warning" | "PHP Error"',
      'intitle:"Index of /" "parent directory"',
      'intext:"sql syntax near" inurl:index.php?id=',
    ],
  },
];

export default function App() {
  const [selectedEngine, setSelectedEngine] = useState("Google");
  const [siteUrl, setSiteUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDorkClick = (dork) => {
    const base =
      selectedEngine === "Google"
        ? "https://www.google.com/search?q="
        : "https://www.shodan.io/search?query=";

    const query = siteUrl ? `${dork} site:${siteUrl}` : dork;
    window.open(`${base}${encodeURIComponent(query)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">
          🕵️‍♂️ Dorking Tool
        </h1>

        {/* Main Search */}
        <input
          type="text"
          placeholder="Search keyword or dork manually"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded bg-gray-800 border border-gray-700"
        />

        {/* Engine Select */}
        <div className="flex gap-4 mb-4 justify-center">
          <button
            onClick={() => setSelectedEngine("Google")}
            className={`px-6 py-2 rounded ${
              selectedEngine === "Google"
                ? "bg-blue-600"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            Google Dorking
          </button>
          <button
            onClick={() => setSelectedEngine("Shodan")}
            className={`px-6 py-2 rounded ${
              selectedEngine === "Shodan"
                ? "bg-green-600"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            Shodan Dorking
          </button>
        </div>

        {/* Site URL */}
        <input
          type="text"
          placeholder="Optional: site URL (example.com)"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
          className="w-full px-4 py-2 mb-8 rounded bg-gray-800 border border-gray-700"
        />

        {/* Dork Categories */}
        <div>
          {dorkCategories.map((category, idx) => (
            <div key={idx} className="mb-6">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                {category.name}
              </h2>
              <ul className="list-disc list-inside">
                {category.dorks.map((dork, index) => (
                  <li
                    key={index}
                    className="mb-1 text-blue-400 hover:underline cursor-pointer"
                    onClick={() => handleDorkClick(dork)}
                  >
                    {dork}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
