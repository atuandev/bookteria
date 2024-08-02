import { z } from 'zod'

export const RegisterSchema = z.object({
  firstName: z.string().min(1, {
    message: 'First name is required!'
  }),
  lastName: z.string().min(1, {
    message: 'Last name is required!'
  }),
  password: z.string().min(1, {
    message: 'Password is required'
  }),
  email: z.string().email({
    message: 'Email is required!'
  })
})
