import React from "react";
import Weather from "./Weather"
import {render} from "@testing-library/react"
import '@testing-library/jest-dom'

test("Weather Render Sunny", async () => {
    //AA Arrange Act Assert
     const { findByRole } = render(<Weather temperature={10} state="sunny"/>)

     const temp = await findByRole("heading")

     expect(temp).toHaveTextContent("1")
})