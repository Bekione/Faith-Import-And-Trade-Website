const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    hasSubMenu: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
    hasSubMenu: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    newTab: false,
    hasSubMenu: true,
    submenu: [
      {
        id: 31,
        title: "Computers",
        path: "/services/computer",
        newTab: false,
      },
      {
        id: 32,
        title: "Stationery",
        path: "/services/stationery",
        newTab: false,
      },
      {
        id: 33,
        title: "Maintenance",
        path: "/services/maintenance",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
    hasSubMenu: false,
  },
];
export default menuData;
