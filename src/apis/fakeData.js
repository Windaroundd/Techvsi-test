import np_matex from "../assets/images/np_matex-216x300.png";
import np_odourless from "../assets/images/np_odourless-216x300.png";
import np_vinilex from "../assets/images/np_vinilex-216x300.png";
import { NORMAL, STANDARD, SUPREME } from "../constant/np_types";

export const fakePaintData = [
  {
    img: np_matex,
    type: NORMAL,
    starting_price: 500,
    list_price: [
      {
        title: "2 Room",
        price: 500,
      },
      {
        title: "3 Room",
        price: 600,
      },
      {
        title: "4 Room",
        price: 700,
      },
      {
        title: "5 Room",
        price: 850,
      },
      {
        title: "EA/3 Gen",
        price: 1000,
      },
      {
        title: "Masionette",
        price: 1250,
      },
    ],
    bgColor: "#E74C3C",
  },
  {
    img: np_vinilex,
    type: STANDARD,
    starting_price: 600,
    list_price: [
      {
        title: "2 Room",
        price: 600,
      },
      {
        title: "3 Room",
        price: 800,
      },
      {
        title: "4 Room",
        price: 900,
      },
      {
        title: "5 Room",
        price: 1100,
      },
      {
        title: "EA/3 Gen",
        price: 1250,
      },
      {
        title: "Masionette",
        price: 1650,
      },
    ],
    bgColor: "#FAD105",
  },
  {
    img: np_odourless,
    type: SUPREME,
    starting_price: 700,
    list_price: [
      {
        title: "2 Room",
        price: 700,
      },
      {
        title: "3 Room",
        price: 1000,
      },
      {
        title: "4 Room",
        price: 1100,
      },
      {
        title: "5 Room",
        price: 1350,
      },
      {
        title: "EA/3 Gen",
        price: 1500,
      },
      {
        title: "Masionette",
        price: 2050,
      },
    ],
    bgColor: "#27AE60",
  },
];
