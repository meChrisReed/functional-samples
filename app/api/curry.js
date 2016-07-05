// curry takes a function and returns either the execution of that function or
//   the curry, awaiting more arguments

// verb: any function that takes at least one value and returns one value
// nouns: any arguments of any type
// (verb, nouns) -> curry(verb, nouns) | verb(nouns)
const curry = (fn, ...args) =>
	args.length === fn.length ?
		fn(...args) :
		curry.bind(null, fn, ...args)

export default curry
