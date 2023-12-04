import { Button } from '@/components/ui/button'
import {Medal} from 'lucide-react'
import Link from 'next/link'

export default function MarketingPage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className='flex mb-4 items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <Medal className='w-6 h-6 mr-2' />
          No.1 Task Managment
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>Srello helps team move 
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2 rounded-[8px] pb-4 w-fit'>work forward</div>
      </div>
      <article>
        <p className='text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl mt-4 text-center mx-auto'>
          Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Srello.
        </p>
      </article>
      <Button variant={'default'} className='mt-6' size={'lg'} asChild>
        <Link href='/sign-up'>
          Get Srello for free
        </Link>
      </Button>
    </section>
  )
}
