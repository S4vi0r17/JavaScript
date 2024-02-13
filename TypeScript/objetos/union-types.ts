(() => {
	type Hero = {
		name: string
		age?: number
		powers: number[]
		getName?: () => string
	}

	let myCustomVariable: string | number | Hero = 'Eder'
	console.log(typeof myCustomVariable) // string

	myCustomVariable = 20
	console.log(typeof myCustomVariable) // number

	myCustomVariable = {
		name: 'Bruce',
		age: 43,
		powers: [1],
	}
	console.log(typeof myCustomVariable) // object
	console.log(myCustomVariable) // { name: 'Bruce', age: 43, powers: [ 1 ] }
})()
