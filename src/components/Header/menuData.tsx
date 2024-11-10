import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "CustomMapping",
    path: "/custom-mapping",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Radius Mapping",
        path: "/radius-mapping",
        newTab: false,
      },
      {
        id: 42,
        title: "Property Ownership and Occupant List",
        path: "/property-ownership",
        newTab: false,
      },
      {
        id: 43,
        title: "Certified Affidavit Preparation",
        path: "/certified-affidavit",
        newTab: false,
      },
      {
        id: 44,
        title: "Public Notice Printing and Mailing",
        path: "/public-notice",
        newTab: false,
      },
      {
        id: 45,
        title: "Notary and Document Certification",
        path: "/notary-document",
        newTab: false,
      },
    ],
  },
];
export default menuData;
