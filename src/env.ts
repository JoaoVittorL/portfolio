import { z } from 'zod';

export const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
  VITE_SERVICE_EMAIL: z.string(),
  VITE_TEMPLATE_ID_EMAIL: z.string(),
  VITE_PUBLIC_KEY_EMAIL: z.string(),
});

export const env = envSchema.parse(import.meta.env);
