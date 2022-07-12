import img_1 from "./img/id_1.jpg"
import img_2 from "./img/id_2.jpg"
import img_3 from "./img/id_3.jpg"

export default [
    {
        id: 1,
        img: img_1,
        location: {
            country: "JAPAN",
            googleMapsLink: "https://google.com/",
        },
        name: "Mount Fiji",
        date: {
            start: "12 Jan, 2021",
            end: "24 Jan, 2021"
        },
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    },
    {
        id: 2,
        img: img_2,
        location: {
            country: "AUSTRALIA",
            googleMapsLink: "https://google.com/",
        },
        name: "Sydney Opera House",
        date: {
            start: "27 May, 2021",
            end: "8 Jun, 2021"
        },
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    },
    {
        id: 3,
        img: img_3,
        location: {
            country: "NORWAY",
            googleMapsLink: "https://google.com/",
        },
        name: "Geirangerfjord",
        date: {
            start: "01 Oct, 2021",
            end: "18 Nov, 2021"
        },
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    }
];