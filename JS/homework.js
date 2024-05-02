/**
 * TODO:
 * 1. Write a function to combine the spaces and devices into a single object that represents the structure of homes, floors, rooms, and devices.
 * 2. Remove any home, floor, or room that doesn't contain any devices.
 */

/*
target data structure:
[
  {
    type: "home",
    id: 1,
    children: [
      {
        type: "floor",
        id: 2,
        children: [
          {
            type: "room",
            id: 3,
            device: [
              {
                type: "device",
                id: 3,
                data: "data",
              },
              {
                type: "device",
                id: 3,
                data: "data",
              },
            ],
          },
        ],
      },
      {
        type: "floor",
        id: 6,
        children: [
          {
            type: "room",
            id: 7,
            children: [
              {
                type: "device",
                id: 7,
                data: "data",
              },
            ],
          },
          {
            type: "room",
            id: 8,
            children: [
              {
                type: "device",
                id: 8,
                data: "data",
              },
              {
                type: "device",
                id: 8,
                data: "data",
              },
            ],
          },
        ],
      },
    ],
  },
];
*/

// 3 types of spaces: home, floor, room
const spaces = [
  {
    type: "home",
    id: 1,
    children: [
      {
        type: "floor",
        id: 2,
        children: [
          {
            type: "room",
            id: 3,
          },
          {
            type: "room",
            id: 4,
          },
          {
            type: "room",
            id: 5,
          },
        ],
      },
      {
        type: "floor",
        id: 6,
        children: [
          {
            type: "room",
            id: 7,
          },
          {
            type: "room",
            id: 8,
          },
        ],
      },
      {
        type: "floor",
        id: 6,
        children: [],
      },
    ],
  },
];

const devices = [
  {
    type: "device",
    id: 7,
    data: "data",
  },
  {
    type: "device",
    id: 3,
    data: "data",
  },
  {
    type: "device",
    id: 3,
    data: "data",
  },
  {
    type: "device",
    id: 8,
    data: "data",
  },
  {
    type: "device",
    id: 8,
    data: "data",
  },
];
