import React from "react";
import CityList from './CityList';
import { action } from "@storybook/addon-actions"

export default {
    title: "CityList",
    Component: CityList
}

const cities = [
    { city: "San Jose", country: "Costa Rica" },
    { city: "Miami", country: "Estados Unidos" },
    { city: "Caracas", country: "Venezuela" },
    { city: "Ciudad Colon", country: "Panama" },
    { city: "Madrid", country: "España" },
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en City ")} />