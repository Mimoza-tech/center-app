import { Booking } from "./booking";

export const Bookings: Booking[] = [
    {
        id : 1,
        name: "Mimoza Neziri",
        programNumber: 2,
        startDate: new Date(),
        endDate: new Date("2023-02-10")
    },
    {
        id : 2,
        name: "Ben Richter",
        programNumber: 3,
        startDate: new Date("2023-02-12"),
        endDate: new Date("2023-02-13")
    },
    {
        id : 3,
        name: "Alena Neziri",
        programNumber: 1,
        startDate: new Date("2023-02-20"),
        endDate: new Date("2023-02-21")
    },
    {
        id : 4,
        name: "Maria Mayer",
        programNumber: 2,
        startDate: new Date("2023-02-09"),
        endDate: new Date("2023-02-09")
    }
];
