export const trendingProperties = [
  {
    id: "rc101",
    name: "Green Valley Boys Hostel",
    city: "Ranchi",
    price: 5500,
    capacity: "2 Sharing",
    discount: 20,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: "rc102",
    name: "Urban Nest PG",
    city: "Hazaribagh",
    price: 6000,
    capacity: "3 Sharing",
    discount: 15,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: "rc103",
    name: "Sunrise Girls Hostel",
    city: "Patna",
    price: 7000,
    capacity: "Single Room",
    discount: 10,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600585154340-0d9f7b1a1f2d",
  },
  {
    id: "rc104",
    name: "Blue Sky Lodge",
    city: "Dhanbad",
    price: 4800,
    capacity: "4 Sharing",
    discount: 25,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: "rc105",
    name: "Elite Comfort PG",
    city: "Ranchi",
    price: 6500,
    capacity: "2 Sharing",
    discount: 18,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1598928506311-4c1a5e0d7c2e",
  },
  {
    id: "rc106",
    name: "Shanti Girls Hostel",
    city: "Hazaribagh",
    price: 5000,
    capacity: "3 Sharing",
    discount: 12,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
];

export const propertyDetails = {
  rc101: {
    id: "rc101",
    name: "Green Valley Boys Hostel",
    location: "Morabadi, Ranchi",
    address: "Near Morabadi Ground, Ranchi, Jharkhand",
    rating: 4.3,
    contact: "+91-9876543210",

    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1560185127-6a8c1d7b51b2",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],

    description:
      "A clean and affordable boys hostel near major colleges with all essential facilities and friendly management.",

    facilities: [
      "High-speed WiFi",
      "24x7 Water",
      "Power Backup",
      "CCTV Security",
      "Parking",
      "Laundry Service",
      "Common Study Area",
    ],

    rooms: [
      {
        type: "Single",
        price: 7500,
        features: ["1 Bed", "Attached Bathroom", "Study Table", "Wardrobe"],
      },
      {
        type: "Double",
        price: 5500,
        features: ["2 Beds", "Shared Bathroom", "Fan", "Wardrobe"],
      },
      {
        type: "Triple",
        price: 4200,
        features: ["3 Beds", "Common Bathroom", "Fan"],
      },
    ],

    policies: [
      "No smoking inside rooms",
      "Visitors allowed till 9 PM",
      "Monthly rent must be paid before 5th",
      "Security deposit: ₹3000",
      "No loud music after 10 PM",
    ],

    reviews: [
      { user: "Rahul", rating: 5, comment: "Great stay, very clean rooms." },
      { user: "Amit", rating: 4, comment: "Affordable and safe environment." },
      { user: "Sanjay", rating: 4, comment: "Good facilities for students." },
    ],
  },

  rc102: {
    id: "rc102",
    name: "Urban Nest PG",
    location: "Near Kallu Chowk, Hazaribagh",
    address: "Main Road, Kallu Chowk, Hazaribagh",
    rating: 4.1,
    contact: "+91-7520781681",

    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1600585154340-0d9f7b1a1f2d",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    ],

    description:
      "Modern PG with spacious rooms, mess facility, and high-speed internet.",

    facilities: [
      "WiFi",
      "Laundry",
      "Mess Facility",
      "CCTV Security",
      "Power Backup",
      "Housekeeping",
    ],

    rooms: [
      {
        type: "Single",
        price: 8000,
        features: ["1 Bed", "AC Room", "Attached Bathroom"],
      },
      {
        type: "Double",
        price: 6000,
        features: ["2 Beds", "Shared Bathroom", "Wardrobe"],
      },
      {
        type: "Triple",
        price: 4800,
        features: ["3 Beds", "Common Bathroom"],
      },
    ],

    policies: [
      "Visitors allowed till 8 PM",
      "No loud music",
      "Rent due before 7th of every month",
      "Security deposit: ₹2500",
    ],

    reviews: [
      { user: "Sneha", rating: 4, comment: "Good food and friendly staff." },
      { user: "Karan", rating: 3, comment: "Rooms are decent but small." },
    ],
  },

  rc103: {
    id: "rc103",
    name: "Sunrise Girls Hostel",
    location: "Hazaribag",
    address: "Near New Colony Road Korrah",
    rating: 4.5,
    contact: "+91-7520781681",

    images: [
      "https://images.unsplash.com/photo-1600585154340-0d9f7b1a1f2d",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1560185127-6a8c1d7b51b2",
      "https://images.unsplash.com/photo-1560185127-6a8c1d7b51b2",
    ],

    description:
      "Premium girls hostel with single room options, AC, and secure environment.",

    facilities: [
      "WiFi",
      "AC Rooms",
      "24x7 Security",
      "Mess Facility",
      "Power Backup",
      "Laundry",
    ],

    rooms: [
      {
        type: "Single",
        price: 7000,
        features: ["1 Bed", "AC", "Attached Bathroom"],
      },
      {
        type: "Double",
        price: 5500,
        features: ["2 Beds", "Fan", "Shared Bathroom"],
      },
    ],

    policies: [
      "No late-night entry",
      "ID required for visitors",
      "Security deposit: ₹4000",
      "Rent before 5th of month",
    ],

    reviews: [
      { user: "Priya", rating: 5, comment: "Safe and comfortable stay." },
      { user: "Anjali", rating: 4, comment: "Food quality is good." },
    ],
  },
};
