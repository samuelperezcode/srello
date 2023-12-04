import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <nav className="md:max-w-screen-2xl w-full mx-auto flex justify-between items-center">
        <Logo />
        <div className="space-x-4 flex justify-between items-center w-full md:block md:w-auto">
          <Button variant={'ghost'} size={'sm'}>
            Privacy Policy
          </Button>
          <Button variant={'ghost'} size={'sm'}>
              Terms of Service
          </Button>
        </div>
      </nav>
    </footer>
  )
}
