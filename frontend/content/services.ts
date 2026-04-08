export type ServiceItem = { name: string; price: string };
export type ServiceCategory = { title: string; items: ServiceItem[] };

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Acrylic",
    items: [
      { name: "Full set (regular polish)", price: "$35+" },
      { name: "Fill (regular polish)", price: "$25+" },
      { name: "Full set (gel polish)", price: "$45+" },
      { name: "Fill (gel polish)", price: "$35+" },
      {name: "Full set ombre", price: "$55+"}
    ],
  },
  {
    title: "Pedicure",
    items: [
      { name: "Judah Pedicure", price: "$47" },
      { name: "Volcano Pedicure", price: "$55" },
      {name: "Regular Pedicure", price :"$35+"},
      {name: "Angel Pedicure " , price : "$37+"},
      {name: "Any Pedicure with gel polish is extra", price : "$15+"}

    ],
  },
  {
    title: "Manicure & Color Change",
    items: [
      { name: "Dry manicure (white color)", price: "$20" },
      { name: "Gel polish", price: "$25" },
      {name: "Color change toes" , price: "$28"}
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Acrylic take off", price: "$12" },
      { name: "Repair", price: "$3+" },
      {name: "Any Design" , price : "$5+"},
      {name: "3D Designs" , price: "$15+"}
    ],
  },
{
title: "Eye Lashes Extensions",
items: [
	{name: "Hawaiian Style", price: "$90"},
	{name: "Russian Volume", price: "$110"},
	{name: "Cat Eye Style", price: "$100"},
	{name: "Natural Style " ,price: "$80"},
	{name: "Remove Eye Lashes" , price: "$10" }
],
},



];

