import winston from 'winston';

const logger  = winston.createLogger({
    level:'info',
    format:winston.format.json(),
    transports:[
        new winston.transports.File({filename:'log.txt'})
    ],
});



const loggerMiddleware = (req, res, next)=>{
    const logData = `request URL: ${req.url} body: ${JSON.stringify(req.body)}`;
    logger.info(logData);
    next()
}

export default loggerMiddleware;