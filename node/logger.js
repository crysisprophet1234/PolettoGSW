const logger = module.exports = require('winston')

const { splat, combine, timestamp, printf } = logger.format;

const myFormat = printf(({ timestamp, level, message, meta }) => {
    return `[${timestamp}] ${level.toUpperCase()} -> ${message};${meta ? JSON.stringify(meta) : ''}`;
});

logger.configure({

    transports: 

        [

            new logger.transports.File({

                name: 'debug-file',
                filename: 'polettogsw.log',
                level: 'debug',
                handleExceptions: true,
                humanReadableUnhandledException: true,
                exitOnError: true,
                json: false,
                maxsize: 104857600,
                maxFiles: 5,

            }),

            new logger.transports.Console({

                name: 'error-console',
                handleExceptions: true,
                humanReadableUnhandledException: true,
                exitOnError: true,

            })

        ],

    format:
        combine(
            timestamp({
                format: 'DD-MM-YYYY  HH:mm:ss'
            }),
            splat(),
            myFormat
        )

});