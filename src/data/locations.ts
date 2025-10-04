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
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Stunning%20real%20French%20countryside%20with%20lavender%20fields%20in%20Provence%2C%20rolling%20hills%2C%20charming%20stone%20villages%2C%20golden%20hour%20lighting%2C%20authentic%20France%20landscape%20photography&image_size=landscape_16_9",
  },
  {
    id: 2,
    name: "Indonesia",
    price: "$1,899",
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Stunning%20tropical%20landscape%20of%20Indonesia%20with%20temples%20and%20rice%20terraces%20travel%20destination&image_size=landscape_16_9",
  },
  {
    id: 3,
    name: "Greece",
    price: "$2,199",
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20Greek%20islands%20with%20white%20buildings%20and%20blue%20sea%20Mediterranean%20travel%20destination&image_size=landscape_16_9",
  },
  {
    id: 4,
    name: "Egypt",
    price: "$1,799",
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Egyptian%20pyramids%20and%20desert%20landscape%20historic%20travel%20destination&image_size=landscape_16_9",
  },
  {
    id: 5,
    name: "Spain",
    price: "$2,299",
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20Spanish%20architecture%20and%20Mediterranean%20coastline%20travel%20destination&image_size=landscape_16_9",
  },
  {
    id: 6,
    name: "Italy",
    price: "$2,599",
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Scenic%20Italian%20landscape%20with%20historic%20architecture%20and%20countryside%20travel%20destination&image_size=landscape_16_9",
  },
];