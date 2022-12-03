const Router = require('express').Router

module.exports = Router({mergeParams: true})

.get('/v1/usuario/loginUsuario', async (req, res, next) => {
    
    try {

            console.log(req.body)
            res.redirect('index.html')

    } catch(error) {
        next(error)
    }
})