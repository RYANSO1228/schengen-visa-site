"use client";
import { useState } from "react";
import countryData from "../../../data/countries.json";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = Object.entries(countryData).filter(([slug, data]) =>
    data.name.includes(query) || slug.includes(query)
  );

  return (
    <main className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">搜索国家签证</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="输入国家名，如 法国"
        className="w-full border px-4 py-2 rounded-xl"
      />
      <ul className="mt-6 space-y-2">
        {results.map(([slug, data]) => (
          <li key={slug}>
            <Link href={`/country/${slug}`} className="text-blue-600 underline">
              {data.name}签证信息
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
