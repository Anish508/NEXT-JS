import Link from "next/link"


export default function marketinglayout({children}: {children:React.ReactNode}){
      return (
            <div>
                  <header className="w-100">
                        <nav className="flex gap-5">
                             <Link href={'/'}>home</Link>
                             <Link href={'about'}>About</Link>
                             <Link href={'contact'}>Contact</Link>
                        </nav>
                  </header>
                  <main>{children}</main>
      
            </div>
      )
}