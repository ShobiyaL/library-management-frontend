const  BookApi  = require("./book").default
const  UserApi  = require("./user").default

const BackendApi = {
  book: BookApi,
  user: UserApi,
}

module.exports = { BackendApi }