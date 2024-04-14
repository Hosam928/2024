import React from "react"
import {render} from "@testing-library/react"
import CityInfo from "./CityInfo"

test("CityInfo R ender", async () => {
    // AAA 
    // Arrange
    // Act
    const city = "Buenos Aires"
    const country = "Argentina"
    const {findAllByRole}  = render(<CityInfo city={city} country={country} />)

    // Assert
    const cityAndCountryComponents = await findAllByRole("heading")

    // Cuanto el test es correcto:
    // Definicion
    // Cuando en el primer elemento (heading) se encuentre la ciudad "Buenos Aires"
    // y cuando en el segudo elemento se encuenntre en el pais Argentina

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})