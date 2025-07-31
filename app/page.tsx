import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <header className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-semibold">申根签证助手</h1>
        <nav className="space-x-4">
          <Link href="#countries">国家</Link>
          <Link href="#faq">常见问题</Link>
          <Link href="#contact">联系我们</Link>
        </nav>
      </header>

      <section className="mt-12 text-center">
        <h2 className="text-4xl font-bold mb-4">一次看懂26国申根签证政策</h2>
        <p className="text-lg text-gray-600 mb-8">覆盖签证类型、资料要求、官方入口，一站掌握</p>
        <div className="flex justify-center flex-wrap gap-4">
          <Link href="/country/france" className="px-4 py-2 border rounded-xl shadow hover:shadow-lg">法国</Link>
          <Link href="/country/germany" className="px-4 py-2 border rounded-xl shadow hover:shadow-lg">德国</Link>
          <Link href="/country/italy" className="px-4 py-2 border rounded-xl shadow hover:shadow-lg">意大利</Link>
          <Link href="/country/spain" className="px-4 py-2 border rounded-xl shadow hover:shadow-lg">西班牙</Link>
        </div>
      </section>

      <footer className="mt-20 border-t pt-6 text-center text-sm text-gray-500">
        <p>关于我们 | 隐私政策 | 免责声明</p>
      </footer>
    </main>
  );
}
