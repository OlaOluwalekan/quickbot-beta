import { generatePrompts } from '@/utils/actions/gemini'
import Template from './Template'
import { auth } from '@/auth'

const TemplatePrompts = async () => {
  const session = await auth()
  const prompts: any = await generatePrompts()

  return (
    <div className='w-fit grid grid-cols-2 place-content-center place-items-center gap-5 my-5 md:grid-cols-4'>
      {prompts.map((prompt: any) => {
        return (
          <Template key={prompt.text} {...prompt} userId={session?.user?.id} />
        )
      })}
    </div>
  )
}

export default TemplatePrompts
