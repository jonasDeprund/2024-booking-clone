'use client';
import { useRouter } from 'next/router';
import * as z from 'zod';

export const formSchema = z.object({
  location: z.string().min(2, 'Must 2 characters or more').max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: 'Please select at least 1 adult',
    })
    .max(12, { message: 'Max 12 adults Occupancy' }),
  children: z.string().min(0).max(12, {
    message: 'Max 12 children Occupancy',
  }),
  rooms: z.string().min(1, {
    message: 'Please select at least 1 room',
  }),
});
function searchForm() {
  const router = useRouter();
  return <div>searchForm</div>;
}

export default searchForm;
