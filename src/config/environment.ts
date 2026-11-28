import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

export const Environment = {
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000,
};
