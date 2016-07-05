// (verbs, noun) -> verbs(verbs(noun))
const compose = (...args) => args.reduceRight(
	(x,fn) => fn(x)
)

export default compose
