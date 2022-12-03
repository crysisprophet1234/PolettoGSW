const Router = require('express').Router

module.exports = Router({mergeParams: true})

.get('/v1/teste/getHelloWorld', async (req, res, next) => {
    try {

        await console.log('Hello world!!!')
        res.json({message: 'GET Hello World!'})

    } catch(error) {
        next(error)
    }
})