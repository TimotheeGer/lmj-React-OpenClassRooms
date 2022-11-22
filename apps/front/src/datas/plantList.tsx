import monstera from '../assets/monstera.jpg'
import basil from '../assets/basil.jpg'
import cactus from '../assets/cactus.jpg'
import lyrata from '../assets/lyrata.jpg'
import mint from '../assets/mint.jpg'
import olivier from '../assets/olivier.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'

export interface Plant
{
	name : string
	category: string
	id: string
	isBestSale: boolean
	isSpecialOffer: boolean
	isAvailable: boolean
	water: number
	light: number
	cover: string
	price: number

}

const plantList : Plant[] = [
	
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		isSpecialOffer: true,
		isAvailable: false,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15	
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: true,
		isSpecialOffer: true,
		isAvailable: false,
		water: 1,
		light: 2,
		cover: lyrata,
		price: 16
	}
	,
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: true,
		isSpecialOffer: false,
		isAvailable: false,
		water: 2,
		light: 1,
		cover: pothos,
		price: 12
	}
	,
	{
		name: 'menthe',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		isSpecialOffer: false,
		isAvailable: false,
		water: 1,
		light: 1,
		cover: mint,
		price: 18
		}
	,
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: true,
		isSpecialOffer: true,
		isAvailable: false,
		water: 1,
		light: 3,
		cover: olivier,
		price: 25
	}
	,
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		isBestSale: true,
		isSpecialOffer: false,
		isAvailable: false,
		water: 2,
		light: 1,
		cover: monstera,
		price: 10
	}
	,
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		isSpecialOffer: false,
		isAvailable: false,
		water: 3,
		light: 3,
		cover: basil,
		price: 11
	}
	,
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		isBestSale: true,
		isSpecialOffer: false,
		isAvailable: false,
		water: 3,
		light: 1,
		cover: cactus,
		price: 15
	}
	,
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: true,
		isSpecialOffer: false,
		isAvailable: false,
		water: 1,
		light: 2,
		cover: succulent,
		price: 19
	}
]

export default plantList