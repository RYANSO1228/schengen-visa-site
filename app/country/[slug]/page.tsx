import countryData from "../../../data/countries.json";
import { notFound } from "next/navigation";

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = countryData[params.slug];
  if (!country) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">{country.name}签证信息</h1>
      <p className="text-gray-600 mb-6">{country.summary}</p>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-medium">签证类型</h2>
          <ul className="list-disc list-inside text-gray-700">
            {country.types.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium">所需资料</h2>
          <ul className="list-disc list-inside text-gray-700">
            {country.documents.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium">申请流程</h2>
          <p className="text-gray-700 whitespace-pre-line">{country.process}</p>
        </div>

        <div className="text-gray-700">
          <p>处理时间：{country.processing_time}</p>
          <p>签证费用：{country.fees}</p>
          <p>申请入口：<a href={country.link} className="text-blue-600 underline" target="_blank">点击进入</a></p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 border rounded-xl hover:shadow-lg"
          >
            导出签证材料清单为 PDF
          </button>
        </div>
      </div>
    </main>
  );
}
