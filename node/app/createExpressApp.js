const express = require('express')
const bodyParser = require('body-parser')
const expressWinston = require('express-winston')
const router = require('./routes/createRouter.js')()
const path = require('path')

module.exports = ({ logger }) => express()


    .use(expressWinston.logger({
        winstonInstance: logger,
        msg: 'HttpStatusCode {{res.statusCode}} {{req.method}} " {{req.url}} " {{res.responseTime}}ms',
        meta: false,
    }))

    .use(bodyParser.urlencoded({ extended: true }))

    .use(bodyParser.json())

    .use((req, res, next) => {

        req.base = `${req.protocol}://${req.get('host')}`
        req.logger = logger
        //req.db = database
        return next()

    })

    .use(express.static(path.resolve(__dirname, '../client/build')))

    .use('/api', router)

    .get('/', (req, res, next) => {

        res.end
        
        (`
        
        <h1>Server status = running</h1>

        <a href="https://localhost:3000/">> Visit us here <</a>

        <p>Powered by PGSW</p>
        
        `);

    })

    .use((error, req, res, next) => {
        logger.error(error)
        res.status(error.status || 500).json({ error })
    })