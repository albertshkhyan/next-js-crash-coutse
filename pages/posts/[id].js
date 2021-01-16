import { useRouter } from 'next/router'

export default function Post() {

  const router = useRouter()
  console.log('router', router);
  return (
    <h2>
      Post with dynamic paramter {router.query.id}
    </h2>
  )
}