import { Navbar } from "./_components/navbar";

export default function DashbaordLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  )
}
