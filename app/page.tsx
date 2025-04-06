import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto py-6 flex items-center justify-between">
        <div className="text-sky-400 font-bold text-2xl">LOGO</div>
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-sky-400 font-medium">
            HOME
          </Link>
          <Link href="#products" className="text-gray-500 font-medium">
            PRODUCTS
          </Link>
          <Link href="#about" className="text-gray-500 font-medium">
            ABOUT
          </Link>
          <Link href="#contacts" className="text-gray-500 font-medium">
            CONTACTS
          </Link>
        </nav>
      </header>

      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              Face <br /> Recognition
            </h1>
            <p className="text-sky-300 max-w-md">
              Discover detailed information about your favorite actors and actresses with our advanced face recognition
              technology. Simply upload an image and get instant results about the person.
            </p>
            <Button asChild className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-6 rounded-full text-lg">
              <Link href="/upload">Get started</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-sky-400 rounded-full -translate-x-1/4 scale-125 z-0"></div>
            <div className="relative z-10 flex justify-center">
              <div className="relative w-64 h-[500px]">
                <div className="w-full h-full bg-sky-400 rounded-3xl flex flex-col items-center justify-center text-white p-4">
                  <div className="w-24 h-24 border-2 border-white rounded-full mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/50 rounded-full"></div>
                  </div>
                  <div className="text-center px-6">
                    <p className="text-sm">Just put your face into selected area :)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

