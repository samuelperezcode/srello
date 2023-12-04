import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {OrganizationSwitcher, UserButton} from '@clerk/nextjs'

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full h-14 border-b shadow-sm bg-white flex items-center px-4">
      {/* Mobile NavBar */}
      <nav className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button variant={"primary"} size={'sm'} className="rounded-sm hidden md:block px-2 py-1 h-auto">
          Create
        </Button >
        <Button variant={"primary"} size={'sm'} className="block md:hidden rounded-sm">
          <Plus className="h-4 w-4" />
        </Button>
      </nav>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher 
          hidePersonal
          afterSelectOrganizationUrl={'/organization/:id'}
          afterCreateOrganizationUrl={'/organization/:id'}
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements:{
              rootBox:{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          }}
        />
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements:{
              avatarBox:{
                height: 30,
                width: 30,
              }
            }
          }}
        />
      </div>
    </header>
  )
}
