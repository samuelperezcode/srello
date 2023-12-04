import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

export default function MarketingLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-screen bg-slate-100">
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-100">
        {children}
      </main>
      <Footer />
    </div>
  )
}
