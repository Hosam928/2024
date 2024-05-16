import React from "react"
import {render} from "@testing-library/react"
import CityList from "./CityList"

const cities = [
    { city: "San Jose", country: "Costa Rica" },
    { city: "Miami", country: "Estados Unidos" },
    { city: "Caracas", country: "Venezuela" },
    { city: "Ciudad Colon", country: "Panama" },
    { city: "Madrid", country: "España" },
]

test("CityList renders", async() => {
    // AAA 
    // Arrange
    // Act

    const {findAllByRole}  = render(<CityList cities={cities } />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(5)
})