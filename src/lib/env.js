// @flow
export const env = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3000,
	DATABASE: 'mongodb://localhost/MKRN'
};
