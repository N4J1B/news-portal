import { Twitter, Facebook, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground h-auto">
      <div className="container mx-auto px-4 pt-14 pb-10 flex flex-col items-center gap-6">
        <div className="w-full flex flex-4 items-start justify-between">
          <div className="flex flex-col gap-2 w-1/5">
            <p className="text-2xl">News Portal</p>
            <p className="text-wrap font-light">Your trusted source for breaking news and in-depth analysis.</p>
            <div className="flex gap-2">
              <Twitter className="w-5 h-5"/>
              <Facebook className="w-5 h-5"/>
              <Instagram className="w-5 h-5"/>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-1/5">
            <p className="font-semibold">Categories</p>
            <Link href="/category/politik" className="hover:text-primary-foreground/70 font-light">Politik</Link>
            <Link href="/category/teknologi" className="hover:text-primary-foreground/70 font-light">Teknologi</Link>
            <Link href="/category/bisnis" className="hover:text-primary-foreground/70 font-light">Bisnis</Link>
            <Link href="/category/olahraga" className="hover:text-primary-foreground/70 font-light">Olahraga</Link>
          </div>
          <div className="flex flex-col items-start gap-2 w-1/5">
            <p className="font-semibold">Company</p>
            <Link href="/about" className="hover:text-primary-foreground/70 font-light">About Us</Link>
            <Link href="/contact" className="hover:text-primary-foreground/70 font-light">Contact</Link>
            <Link href="/careers" className="hover:text-primary-foreground/70 font-light">Careers</Link>
            <Link href="/privacy-policy" className="hover:text-primary-foreground/70 font-light">Privacy Policy</Link>
          </div>
          <div className="flex flex-col items-start gap-2 w-1/5">
            <p className="font-semibold">Support</p>
            <Link href="/" className="hover:text-primary-foreground/70 font-light">Help Center</Link>
            <Link href="/" className="hover:text-primary-foreground/70 font-light">Terms of Service</Link>
            <Link href="/" className="hover:text-primary-foreground/70 font-light">Advertise</Link>
            <Link href="/" className="hover:text-primary-foreground/70 font-light">RSS Feed</Link>
          </div>

        </div>
        <Separator decorative={true} className="opacity-70"/>
        <div className="text-center opacity-70">
          © 2025 NewsPortal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}