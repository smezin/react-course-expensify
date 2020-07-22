//destructuring
const book = {
    title: 'ice hunt',
    author: 'someone cool',
    publisher: {
        name: 'kindleProd'
    }
}
const {name:publisherName = 'self published'} = book.publisher
console.log(publisherName)
//array destructuring
const itemSpec = ['Hot coffee', '2.00$', '2.50$', '2.75$']
const[item, ,mPrice] = itemSpec
console.log(`A ${item} costs ${mPrice}`)
 