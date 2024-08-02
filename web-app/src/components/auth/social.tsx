import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/button'

const Social = () => {
  return (
    <div className='w-full flex items-center'>
      <Button variant='outline' size='lg' className='w-full' onClick={() => {}}>
        <FcGoogle size={24} className='mr-2' />
        <span>Continue with Google</span>
      </Button>
    </div>
  )
}

export { Social }
