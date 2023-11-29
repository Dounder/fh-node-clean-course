import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

export const logger = winston.createLogger({
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

export const buildLogger = (service: string) => {
	return {
		log: (message: string, level = 'info') => {
			logger.log(level, { message, service });
		},
		error: (message: string) => {
			logger.log('error', { message, service });
		},
	};
};
