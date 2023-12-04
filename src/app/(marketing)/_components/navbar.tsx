import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full px-4 h-14  border-b shadow-sm bg-white flex items-center">
      <nav className="md:max-w-screen-2xl w-full mx-auto flex justify-between items-center">
        <Logo />
        <div className="space-x-4 flex justify-between items-center w-full md:block md:w-auto">
          <Button variant={'outline'} size={'sm'} asChild>
            <Link href={'/sign-in'}>
              Sign in
            </Link>
          </Button>
          <Button size={'sm'} asChild>
            <Link href={'/sign-up'}>
              Get Srello for free
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
