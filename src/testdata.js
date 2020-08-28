import { findAllByTestId } from "@testing-library/react";

const testdata = [
    {   id: "1",
        date: "2020-05-20",
        fishtype: "Trout",
        place: "Rabbit river",
        weight: 2.2},

    {   id: "2",
        date: "2020-05-25",
        fishtype: "Grayling",
        place: "White river",
        weight: 1.7},

    {   id: "3",
        date: "2020-06-05",
        fishtype: "River salmon",
        place: "White river",
        weight: 1.2},

    {   id: "4",
        fishingdate: "2020-06-15",
        fishtype: "Grayling",
        place: "White river",
        weight: 1.6},

    {   id: "5",
        fishingdate: "2020-07-10",
        fishtype: "Trout",
        place: "Rabbit river",
        weight: 3.2},

    {   id: "6",
        fishingdate: "2020-07-20",
        fishtype: "River salmon",
        place: "Big river",
        weight: 1.1},
     
    {   id: "7",
        fishingdate: "2020-08-04",
        fishtype: "Trout",
        place: "White river",
        weight: 3.1},    

    {   id: "8",
        fishingdate: "2020-08-15",
        fishtype: "Grayling",
        place: "Rabbit river",
        weight: 1.5},

    {   id: "9",
        fishingdate: "2020-08-20",
        fishtype: "Pike",
        place: "Rabbit river",
        weight: 4.5} 
];

export default testdata;