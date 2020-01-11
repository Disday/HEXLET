const F = a => b => b 
// console.log(sec(1)(2))
const T = a => b => a
// console.log(fir(1)(2))
//const T = fir;
const rev = f => a => b => f(b) (a)
const not = p => p(F)(T) 
const and = p => q => p(q)(p)
const or = p => q => p(p)(q)
const zero = f => x => x;
const succ = n => f => a => f( n(f)(a) )
const num = n => n(x => x + 1)(0)
console.log(
num(succ(zero))
)