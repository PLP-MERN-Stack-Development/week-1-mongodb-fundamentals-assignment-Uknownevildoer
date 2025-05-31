//QUESTION 1
db.books.find({genre: "Fiction"})

//QUESTION 2
db.books.find({published_year: {$gt: 1950}})

//QUESTION 3
db.books.find({author: "J.R.R. Tolkien"})

//QUESTION 4
db.books.updateOne({title: "The Lord of the Rings"},{$set: {price: 21.99}})

//QUESTION 5
db.books.deleteOne({title: "Animal Farm"})

//TASK 3
db.books.find({ inStock: true, publishedYear: { $gt: 2010 } }, { _id: false, title: true, author: true, price: true }.skip(0).limit(5)
