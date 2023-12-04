export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-screen grid place-content-center">
    {children }
    </div>
  )
}
