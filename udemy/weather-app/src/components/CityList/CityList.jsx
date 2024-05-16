import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import { Grid } from '@mui/material'

const renderCityAndContry = eventOnClickCity => cityAndContry => {
	const {city, country} = cityAndContry

	return (
		<li key={city} onClick={eventOnClickCity}>
			<Grid container
				justifyContent="center" 
				alignItems="center">
				<Grid item
					xs={12}
					md={8}>
					<CityInfo city={city} country={country} />
				</Grid>
				<Grid item
					xs={12}
					md={4}>
					<Weather temperature={10} state="sunny" />
				</Grid>
			</Grid>
		</li>
	)
}

const CityList = ({cities, onClickCity}) => {
	return (
		<ul>
			{
			cities.map(cityAndContry => renderCityAndContry(onClickCity)(cityAndContry))
			}
		</ul>
	)
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
	onClickCity: PropTypes.func.isRequired,
}

export default CityList