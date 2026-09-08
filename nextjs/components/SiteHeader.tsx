import { ChevronDown, Search, User, ShoppingCart } from "lucide-react";
import { ClarkLogo } from "./ClarkLogo";

const NAV = ["Products", "Technical Docs", "About Us"];

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center gap-x-10 gap-y-4 bg-clark px-7 py-3.5 text-white">
      <ClarkLogo />
      <nav className="flex items-center gap-7 text-[15px]">
        {NAV.map((item) => (
          <button key={item} className="flex items-center gap-1.5 hover:opacity-80">
            {item}
            <ChevronDown size={12} strokeWidth={2.5} />
          </button>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-5 text-[15px]">
        <a href="#contact" className="text-white no-underline hover:opacity-80 hover:no-underline">Contact Us</a>
        <button aria-label="Search" className="hover:opacity-80"><Search size={19} strokeWidth={1.8} /></button>
        <button aria-label="Account" className="hover:opacity-80"><User size={19} strokeWidth={1.8} /></button>
        <span className="h-6 w-px bg-white/40" />
        <button aria-label="Cart" className="flex items-center gap-1.5 hover:opacity-80">
          <ShoppingCart size={19} strokeWidth={1.8} /> 0
        </button>
      </div>
    </header>
  );
}
