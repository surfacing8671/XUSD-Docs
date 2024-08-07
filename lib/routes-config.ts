// for page navigation & to sort on leftbar
export const ROUTES = [

  {
    title: "XUSD EcoStable System",
    href: "xusd-start",
    items: [
      { title: "XUSD", href: "/whatisxusd" },
      { title: "Quick Start", href: "/quickStart" },
      { title: "PulseChain", href: "/pulsechain" },
    ],
  },
  {
    title: "Launch Stages",
    href: "launch",
    items: [
      { title: "Overview", href: "/launchOverview" },

    ],
  },
  {
    title: "Dynamic Taxation",
    href: "dynamicTax",
    items: [
      { title: "Overview", href: "/taxoverview" },
      { title: "Taxes", href: "/taxes" },
      { title: "Tax Classes", href: "/classes" },
      { title: "Assignment of Tax to Users", href: "/assignment" },   
 
      { title: "Dev resources", href: "/taxdev" },
    ],
  },
  {
    title: "XUSD LitPass",
    href: "creditreport",
    items: [
      { title: "Overview", href: "/litoverview" },

      { title: "Buy", href: "/obtain" },
      
    ],
  },
  {
    title: "Kings",
    href: "kings",
    items: [
      { title: "Are you worthy?", href: "/startking" },
      { title: "Seigniorage", href: "/seigniorage" },
      
    ],
  }, 
  
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
