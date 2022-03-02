const { count } = require("console")
const bookController= require("../models/bookModel")











const createBook= async function (req, res) {
    let data= req.body
    // let bookdatabase = bookController.BookModel

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( )
     res.send({msg: allBooks})
}



const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getAuthorData= async function (req, res) {
    let allAuthors= await AuthorModel.find( )
     res.send({msg: allAuthors})
}

const allBooksChetanBhagat = async function (req,res){

    const authorChetanDetails = await AuthorModel.find({author_name :"Chetan Bhagat" })
    console.log(authorChetanDetails)

    const Id = authorChetanDetails[0].author_id
    const allBooksOfChetan = await BookModel.find({author_id:Id}).select({name:1,_id:0})

    res.send({ChetanBhagatBooks: allBooksOfChetan})



}




const findAuthor = async function (req,res){
    //let data = req.body // {price: "100"}

    const authorDetails = await BookModel.find({name :"Two States" })
    //console.log(authorDetails)

    const Id = authorDetails[0].author_id
    const authorName = await AuthorModel.find({author_id:Id}).select({author_name:1,_id:0})

    //const _name = authorDetails[0].name  //we can also do this
    const newprice =await BookModel.findOneAndUpdate({name:"Two States"}, {$set:{price:100}}, {new:true, upsert: true}).select({price:1,_id:0})
    //{ $set: data }, //update in data


    res.send({authorOf_Two_states: authorName, newprice})



}

const authorNameByPrice = async function(req,res){
    const booksNames = await BookModel.find({price:{$gte:50,$lte:100}}).select({name:1,_id:0})
    const booksId = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    console.log(booksId)
    console.log(booksNames)
    const id = booksId.map(obj => obj.author_id)

    //booksId
    // [
    //     { author_id: 1 },
    //     { author_id: 1 },
    //     { author_id: 1 },
    //     { author_id: 1 },
    //     { author_id: 2 },
    //     { author_id: 2 }
    //   ]

    //console.log(id);//[ 1, 1, 1, 1, 2, 2 ]

    let temp = []
    for(let i=0;i< id.length; i++){
        let x = id[i];

        const author = await AuthorModel.find({author_id:x}).select({author_name:1,_id:0})
        temp.push(author)
    }
    console.log(temp);

    const authorName = temp.flat()
    //res.send({msg:authorName,booksNames})

    let resultArray = []
    for(let i = 0; i< booksNames.length; i++){
        let Bname = booksNames[i].name;
        let Aname = authorName[i].author_name;

        resultArray.push({name:Bname,author_name:Aname})


    }
    res.send({finally:resultArray})

}



//output is
// {
//     "finally": [
//         {
//             "name": "Two States",
//             "author_name": "Chetan Bhagat"
//         },
//         {
//             "name": "Five Point Someone",
//             "author_name": "Chetan Bhagat"
//         },
//         {
//             "name": "The 3 Mistakes of My Life",
//             "author_name": "Chetan Bhagat"
//         },
//         {
//             "name": "One Arranged Murder",
//             "author_name": "Chetan Bhagat"
//         },
//         {
//             "name": "Harry Poter",
//             "author_name": "J.K Rowling"
//         },
//         {
//             "name": "Harry Poter",
//             "author_name": "J.K Rowling"
//         }
//     ]
// }









// [
//     { name: 'Two States' },
//     { name: 'Five Point Someone' },
//     { name: 'The 3 Mistakes of My Life' },
//     { name: 'One Arranged Murder' },
//     { name: 'Harry Poter' },
//     { name: 'Harry Poter' }
//   ]



//****************************************************************** */





// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData




module.exports.createAuthor= createAuthor
module.exports.getAuthorData=getAuthorData


module.exports.allBooksChetanBhagat=allBooksChetanBhagat

module.exports.findAuthor=findAuthor


module.exports.authorNameByPrice= authorNameByPrice







// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
