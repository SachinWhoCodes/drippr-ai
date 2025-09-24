import { ShoppingBag, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground px-4 py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="drippr-title text-2xl text-white">
          DRIPPR
        </div>
        
        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <ShoppingBag className="h-6 w-6 text-white" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              0
            </span>
          </div>
          <Menu className="h-6 w-6 text-white" />
        </div>
      </div>
    </header>
  );
}