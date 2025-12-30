export type ServiceItem = { name: string; price: string };
export type ServiceCategory = { title: string; items: ServiceItem[] };

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Acrylic",
    items: [
      { name: "Full set (regular polish)", price: "$35" },
      { name: "Fill (regular polish)", price: "$25" },
      { name: "Full set (gel polish)", price: "$45" },
      { name: "Fill (gel polish)", price: "$35" },
    ],
  },
  {
    title: "Pedicure",
    items: [
      { name: "Judah Pedicure", price: "$47" },
      { name: "Jelly Pedicure", price: "$55" },
    ],
  },
  {
    title: "Manicure & Color Change",
    items: [
      { name: "Dry manicure (white color)", price: "$20" },
      { name: "Gel polish", price: "$25" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Acrylic take off", price: "$12" },
      { name: "Repair", price: "$3+" },
    ],
  },
];

