import { generateGlobalPoints } from "../utils/heatUtils";

export const layersData = {
  price: {
    label: "Property Prices",
    stats: "₹8,200 / sq.ft avg",
    description: "High intensity areas indicate higher property prices.",
    points: generateGlobalPoints(1200, 1)
  },

  schools: {
    label: "Schools",
    stats: "14 schools nearby",
    description: "Density of educational institutions.",
    points: generateGlobalPoints(900, 0.8)
  },

  hospitals: {
    label: "Hospitals",
    stats: "6 hospitals nearby",
    description: "Access to medical facilities.",
    points: generateGlobalPoints(600, 0.7)
  },

  crime: {
    label: "Crime Rate",
    stats: "Medium risk",
    description: "Higher intensity means higher crime reports.",
    points: generateGlobalPoints(1000, 0.6)
  },

  travel: {
    label: "Travel Time",
    stats: "Avg 32 mins",
    description: "Commute time to key areas.",
    points: generateGlobalPoints(800, 0.5)
  }
};
