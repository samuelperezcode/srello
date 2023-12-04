import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { headingFont } from "@/lib/fonts";

export default function Logo() {
  return (
    <Link href='/'>
      <div className="hover:opacity-75 transition hidden md:flex items-center gap-x-2">
        <Image
          src='/images/logo.svg'
          alt='Srello'
          width={30}
          height={30}
          className='cursor-pointer' 
        />
        <p className={cn(
          "text-lg pt-1 text-neutral-700",
          headingFont.className
        )}>Srello</p>
      </div>
    </Link>
  )
}
