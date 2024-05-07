import { FcGoogle } from 'react-icons/fc'
import Button from '../ui/buttons/Button'
import { FaGithub, FaTwitter } from 'react-icons/fa6'

const OAuthCard = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
      <Button
        type='button'
        size='square'
        hasIcon={true}
        icon={<FcGoogle />}
        iconSize='text-5xl'
        bg='bg-base-100'
      />
      <Button
        type='button'
        size='square'
        hasIcon={true}
        icon={<FaGithub />}
        iconSize='text-5xl'
        bg='bg-base-100'
      />
    </div>
  )
}

export default OAuthCard
