import { Home, Search, Star, ShoppingBag, User } from "lucide-react";

export function BottomNav() {
  const navItems = [
    { icon: Home, label: "Home", active: false },
    { icon: Search, label: "Search", active: false },
    { icon: Star, label: "Clubs", active: true }, // Active like in the image
    { icon: ShoppingBag, label: "Bag", active: false },
    { icon: User, label: "Account", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-4 py-2">
      <div className="flex items-center justify-around max-w-screen-xl mx-auto">
        {navItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1 py-2">
            <item.icon 
              className={`h-6 w-6 ${
                item.active ? 'text-highlight' : 'text-muted-foreground'
              }`} 
            />
            <span 
              className={`text-xs font-medium ${
                item.active ? 'text-highlight' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}