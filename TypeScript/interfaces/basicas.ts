;(() => {
	interface Hero {
		name: string
		age?: number
		powers: number[]
		getName?: () => string
	}

	let flash: Hero = {
		name: 'Barry Allen',
		age: 24,
		powers: [1, 2],
	}

	let superman: Hero = {
		name: 'Clark Kent',
		age: 60,
		powers: [1],
		getName() {
			return this.name
		},
	}
})()

/*
    Difference between interface and type:

    Interface:
    - Interfaces can be merged
    - Interfaces can be extended by other interfaces

    Type:
    - Type can be used to define union types
*/
