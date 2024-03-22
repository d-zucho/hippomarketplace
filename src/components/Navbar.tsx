import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './icons'

const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper className='border-b borger-gray-200'>
          <div className='flex items-center h-16'>
            {/* TODO: Mobile Nav */}

            {/* --LOGO -- */}
            <div className='ml-4 flex lg:ml-0'>
              <Link href='/'>
                <Icons.logo className='h-10 w-10 cursor-pointer' />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar