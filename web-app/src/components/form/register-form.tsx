'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Social } from '@/components/auth/social'
import { BackButton } from '@/components/common/back-button'
import { Container } from '@/components/common/container'
import { FormError } from '@/components/form/form-error'
import { FormSuccess } from '@/components/form/form-success'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { RegisterSchema } from '@/schemas/auth/register'
import { Logo } from '@/components/common/logo'

type RegisterFormValues = z.infer<typeof RegisterSchema>

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isSpending, startTransition] = useTransition()

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  })

  const onSubmit = (values: RegisterFormValues) => {
    setError('')
    setSuccess('')

    console.log(values)
  }

  return (
    <Container className='flex items-center justify-center'>
      <Card className='mx-auto max-w-md'>
        <CardHeader>
          <Logo className='mb-4' />
          <CardTitle className='text-2xl'>Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-2'>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isSpending}
                            placeholder='Tuan'
                            type='firstName'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isSpending}
                            placeholder='Nguyen'
                            type='lastName'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSpending}
                          placeholder='example@gmail.com'
                          type='email'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          {...field}
                          disabled={isSpending}
                          placeholder='******'
                          type='password'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <div className='space-y-2'>
                <Button type='submit' className='w-full'>
                  Sign Up
                </Button>
                <Social />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <BackButton
            label='Already have an account? Login now.'
            href='/login'
          />
        </CardFooter>
      </Card>
    </Container>
  )
}

export { RegisterForm }
