import Adress from 'src/components/Adress/Adress'

export default class authService {
  static async Registartion(login,password) {
    return Adress.post('/registration', {login, password})
  }

  static async Login(login, password) {
    return Adress.post('/login', { login, password })
  }

  static async Logout() {
    return Adress.post('/logout', {})
  }
}