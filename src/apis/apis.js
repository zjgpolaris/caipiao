
const baseUrl = 'http://localhost:80'
const apis = {
    login: baseUrl+'/webapp/account/login',
    register: baseUrl+'/webapp/account/register',
    findByGameName : baseUrl+'/gameManage/games/findByGameName'
}

export default apis