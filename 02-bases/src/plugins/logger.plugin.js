const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
	level: 'info',
	format: combine(timestamp(), json()),
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
	],
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple(),
		})
	);
}

module.exports = function buildLogger(service) {
	return {
		log: (message, level = 'info') => {
			logger.log(level, { message, service });
		},
		error: (message) => {
			logger.log('error', { message, service });
		},
	};
};
