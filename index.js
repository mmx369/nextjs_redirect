//dashboard/index.js
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useAuthContext from '../../hook/useAuthContext'
import styles from './index.module.css'

const Dashboard = () => {
  const router = useRouter()
  const { user } = useAuthContext()
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    //Here call api and send token to server that will validate your token
    if (!user) {
      setIsLogin(false)
      router.push('/user/login')
    }
  }, [])

  return (
    isLogin && (
      <div className={styles.container}>
        <div className='maxwidth'>
          <div className='control'>
            <div className='user'>
              <p>Welcome </p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Dashboard
