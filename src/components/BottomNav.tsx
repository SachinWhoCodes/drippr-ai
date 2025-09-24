import { Home, Search, Star, ShoppingBag, User } from "lucide-react";

export function BottomNav() {
  // const navItems = [
  //   { icon: Home, label: "Home", active: false },
  //   { icon: Search, label: "Search", active: false },
  //   { icon: Star, label: "Clubs", active: true }, // Active like in the image
  //   { icon: ShoppingBag, label: "Bag", active: false },
  //   { icon: User, label: "Account", active: false },
  // ];

  return (
    // <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-4 py-2">
    //   <div className="flex items-center justify-around max-w-screen-xl mx-auto">
    //     {navItems.map((item, index) => (
    //       <div key={index} className="flex flex-col items-center gap-1 py-2">
    //         <item.icon 
    //           className={`h-6 w-6 ${
    //             item.active ? 'text-highlight' : 'text-muted-foreground'
    //           }`} 
    //         />
    //         <span 
    //           className={`text-xs font-medium ${
    //             item.active ? 'text-highlight' : 'text-muted-foreground'
    //           }`}
    //         >
    //           {item.label}
    //         </span>
    //       </div>
    //     ))}
    //   </div>
    // </nav>

    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md flex justify-around items-center py-2 text-sm font-medium">
  <a href="https://drippr.in/" title="Home" className="flex flex-col items-center text-gray-600 hover:text-black">
    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
    </svg>
    Home
  </a>


  <a href="https://drippr.in/search" title="Search" className="flex flex-col items-center text-gray-600 hover:text-black">
    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 
        13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 
        16C11.11 16 12.59 15.41 13.73 14.43L14 
        14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 
        14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 
        9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 
        11.99 14 9.5 14Z"/>
    </svg>
    Search
  </a>


  <a href="https://drippr.in/pages/dripprclub" title="Clubs" className="flex flex-col items-center text-gray-600 hover:text-black">
    <svg className="w-6 h-6 mb-1" fill="#FFD700" viewBox="0 0 24 24">
      <path d="M5 20h14l1-10-5 3-3-7-3 7-5-3 1 10z"/>
    </svg>
    <span>Clubs</span>
  </a>

  <a href="https://drippr-ai.vercel.app/" title="AI Stylist"
     className="flex flex-col items-center text-black hover:text-black">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="ai-stylist-outlined" role="img">

      <path d="M12 3a2 2 0 1 1 0 4v1l7 5v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7l7-5V7a2 2 0 0 1 0-4z"
            fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
 
      <path d="M18 9l2-2M18 7l-1 1M6 9l-2-2M6 7l1 1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
   
      <circle cx="18" cy="18" r="3" fill="currentColor"/>
      <text x="18" y="18" text-anchor="middle" dominant-baseline="central" font-size="4" font-family="Arial, Helvetica, sans-serif" fill="#fff">AI</text>
    </svg>

    AI Stylist
  </a>


  <a href="https://drippr.in/account" title="Account" className="flex flex-col items-center text-gray-600 hover:text-black">
    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12C15.31 12 18 9.31 18 
      6C18 2.69 15.31 0 12 0C8.69 0 6 
      2.69 6 6C6 9.31 8.69 12 12 
      12ZM12 14C7.33 14 2 16.34 2 
      20V22H22V20C22 16.34 16.67 
      14 12 14Z"/>
    </svg>
    Account
  </a>
</div>

  );
}