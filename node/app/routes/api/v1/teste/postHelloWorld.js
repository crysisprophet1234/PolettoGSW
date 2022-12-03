const Router = require('express').Router

module.exports = Router({mergeParams: true})

.post('/v1/teste/postHelloWorld', async (req, res, next) => {
    try {

        await console.log('Hello world!!!')
        res.end('POST Hello world!')

    } catch(error) {
        next(error)
    }
})