export interface Location {
  id: number;
  name: string;
  price: string;
  backgroundImage: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "France",
    price: "$2,499",
    backgroundImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Indonesia",
    price: "$1,899",
    backgroundImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Greece",
    price: "$2,199",
    backgroundImage: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Egypt",
    price: "$1,799",
    backgroundImage: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Spain",
    price: "$2,299",
    backgroundImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Italy",
    price: "$2,599",
    backgroundImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80&auto=format&fit=crop",
  },
];