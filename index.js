const json_server=require('json-server')

// import cors

const cors=require('cors')

// create json server
const umsServer=json_server.create()

// create a middleware for json to js data conversion

const middleware=json_server.defaults()

// create a route for connect json file with main file(index.js)

const route=json_server.router('user.json')

// apply cors

umsServer.use(cors())

// apply mw as appn specific mw

umsServer.use(middleware)

// apply route

umsServer.use(route)

// create port

const PORT=8000

umsServer.listen(PORT,()=>{
    console.log(`__UMS Server Started at ${PORT}__`);
})
