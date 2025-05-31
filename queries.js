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
db.books.find({ in_Stock: true, published_Year: { $gt: 2010 } }, { _id: false, title: true, author: true, price: true }.skip(0).limit(5)

//TASK 4
db.books.aggregate([{$project: {decade: {$concat: [{ $toString: 
  { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },"s"]}}},
  {$group: {_id: "$decade",count: { $sum: 1 }}},{$sort: { _id: 1 }}, {$project: {_id: 0,decade: "$_id",totalBooks: "$count"}}])

//TASK 5
db.books.createIndex({title: 1})
db.books.createIndex({ author: 1, published_year: 1 })
db.books.find({ author: "J.R.R. Tolkien", published_year: 1954 }).explain("executionStats")
