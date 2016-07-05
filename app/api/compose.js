// compose takes a series of functions.
// returns a function that when executed runs the series in order passing the
// results of the previous to the next. Eventually returning the product of
// the last supplied function

// verb: any function that takes at least one value and returns one value
// noun: an argument of any type
// (verbs, noun) -> verbs(verbs(noun))
const compose = (...args) => args.reduceRight(
	(x,fn) => fn(x)
)

export default compose
