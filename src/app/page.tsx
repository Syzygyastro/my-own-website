// `app/page.tsx` is the UI for the `/` URL

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import profilePic from 'public/images/profile.png'
import { ModeToggle } from '@/components/ui/theme-toggle';
import ContactForm from '@/components/ui/form'

export default function Home() {
  return(
    <div>
      <div className='flex justify-end'>
        <ModeToggle />
      </div>
      <h1 className='px-3'>Hello
      <div className="inline-block relative left-60">
        <Image className='rounded-full border-4 border-purple-950'
          src={profilePic}
          alt="Picture of the author"
          width={300}
          height={300}/>
      </div>
        <br/>
        <Link href="/resume"> Resume </Link>
        <br/>
        <Link href="/blog"> Blog </Link>
        <div>
          <div>
            <p>Enter Paragraph here</p>
            <Button>Click here</Button>
          </div>
          
        </div>
      </h1>
      <div className="flex justify-end right-0">
        <ContactForm />
      </div>
    </div>

  )
}
