// (verb, nouns) -> curry(verb, nouns) | verb(nouns)
const curry = (fn, ...args) =>
	args.length === fn.length ?
		fn(...args) :
		curry.bind(null, fn, ...args)

export default curry
