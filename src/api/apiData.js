import axios from "axios";


/* get и delete передают на сервер только строку адреса сервера(url)
* post - создание чего то , put - добавление чего то
* */

let instance = axios.create({
  baseURL:"https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b4675cab-94e6-4010-9f10-e0969b6173e9"
  },
})
export const usersApi = {
  getUsersPage (current,pageSize){
    return instance.get(`users?page=${current}&count=${pageSize}`)
      .then(response => response.data)
  },
  getUserProfile (idUser) {
return instance.get(`profile/${idUser}`)
  .then(response => response.data
  )
  }
}


export const Me = {
  authMe () {
    return instance.get("auth/me")
      .then(response => response.data)
  },
}
export const loadAvatar  = {

  setPhoto(photo) {
    const dataForm = new FormData();
    dataForm.append('image',photo)
    return instance.post(`profile/photo`, dataForm ,{
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    })
      .then(response => response.data)
  }
}
export const getProfile = {
  getProfile (idUser) {
    return instance.get(`profile/${idUser}`)
      .then(response => response.data)
  },
  getStatusProfile (idUser) {
    return instance.get(`profile/status/${idUser}`)
      .then(response => response)
  },
  updateStatusProfile(status) {
    return instance.put(`profile/status/`,{    // мы делаем put запрос(обновляем что то на сервере), по этому наш запрос имеет доп.поле с обьектом status(это то что мы хотим обновить)
      // в документации к API написано как надо отправлять put запросы и как называть наш обьект
      status:status
    })
  }
}
export const followStatus = {
  deleteFollow (userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  },
  postFollow (userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
}
export const authorization = {
  login(data) {
    return instance.post(`auth/login`,{
      email:data.email,
      password:data.password,
      rememberMe:data.rememberMe,

    })
      .then(response => response.data)
  },
  logOut(){
    return instance.delete(`auth/login`)
      .then(response => response.data)
  },

  editProfile(data) {
    return instance.put('profile' , {
      userId : data.userId,
      lookingForAJob : data.lookingForAJob,
      lookingForAJobDescription : data.lookingForAJobDescription,
      fullName:data.fullName,
      aboutMe:"sadsd",
      contacts:{
        github:data.contacts.github,
        vk:'https://www.instagram.com/instagram/',
        facebook:data.contacts.facebook,
        instagram:data.contacts.instagram,
        twitter:data.contacts.twitter,
        website:data.contacts.website,
        youtube:data.contacts.youtube,
        mainLink:"https://www.instagram.com/instagram/",
      }
    })
      .then(response => response.data)
  }
}




