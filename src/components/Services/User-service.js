import Adress from 'src/components/Adress/Api';

export default class UserService {
    static async GetReceptions() {
        return Adress.get(`/getAllReceptions?token=&{localStorage.getItem('token')}`);
    }
}