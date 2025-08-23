import axios from 'axios'
import Cookies from 'js-cookie'
import { env } from './env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const token = Cookies.get('token')

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 2000)),
    )

    return config
  })
}
