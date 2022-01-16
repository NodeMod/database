const db = require('../src/index')

db.set('super', { email: 'super@nodemod.org', password: 'A*******'})
db.set('me', 'd')

let gr = db.get('super')

console.log(db.get('me'))
console.log(gr.email)
console.log(gr.password)