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
import { LoginSchema } from '@/schemas/auth/login'

type LoginFormValues = z.infer<typeof LoginSchema>

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isSpending, startTransition] = useTransition()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: LoginFormValues) => {
    setError('')
    setSuccess('')

  }

  return (
    <Container className='flex items-center justify-center'>
      <Card className='mx-auto max-w-md w-full'>
        <CardHeader>
          <CardTitle className='text-2xl'>Sign in</CardTitle>
          <CardDescription>
            Welcome back! Please sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='space-y-4'>
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
              <Button type='submit' className='w-full'>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Social />
        </CardFooter>
        <CardFooter>
          <BackButton
            label="Don't have an account? Sign up now."
            href='/register'
          />
        </CardFooter>
      </Card>
    </Container>
  )
}

export { LoginForm }

