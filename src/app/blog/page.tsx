// `app/blog/page.tsx` is the UI for the `/blog` URL
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Syzz's Blog",
  }
export default function Page() {
    return(
    <>
    <h1>Hello, this is my Blog Page!</h1>
    <h2>
        <Link href="/">Back to home</Link>
    </h2>
    </>
    
    )
  }

  