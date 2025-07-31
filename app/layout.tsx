export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="bg-white text-black font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
