import { Button } from "./ui/button"
import Link from "next/link"
import { Search } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold"> News Portal</Link>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/category/politik" className="hover:text-primary/70">Politik</Link>
            <Link href="/category/teknologi" className="hover:text-primary/70">Teknologi</Link>
            <Link href="/category/bisnis" className="hover:text-primary/70">Bisnis</Link>
            <Link href="/category/olahraga" className="hover:text-primary/70">Olahraga</Link>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" asChild>
            <Link className="hover:text-primary/70" href="/login">Login</Link>
          </Button>
          <Button variant="default" asChild>
            <Link className="hover:text-secondary" href="/Register">Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}