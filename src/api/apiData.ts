import axios from "axios";
import {ContactsType, ProfileType} from "../redux/profilePageReducer";


let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b4675cab-94e6-4010-9f10-e0969b6173e9"
    },
})
export const usersApi = {
    getUsersPage(current: number, pageSize: number) {
        return instance.get(`users?page=${current}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUserProfile(idUser: number) {
        return instance.get(`profile/${idUser}`)
            .then(response => response.data
            )
    }
}


export enum ResultCodes {
    Success = 0,
    Error = 1
}

type MeType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodes,
    messages: Array<string> | Array<null>
}


export const Me = {
    authMe() {
        return instance.get<MeType>("auth/me")
            .then(response => response.data)
    },
}

type SetPhotoType = {
    data: {
        photos: {
            small: string,
            large: string
        }
    },
    resultCode: ResultCodes,
    messages: Array<string> | Array<null>
}
export const loadAvatar = {

    setPhoto(photo: any) {
        const dataForm = new FormData();
        dataForm.append('image', photo)
        return instance.post<SetPhotoType>(`profile/photo`, dataForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
}

type getStatusProfileType = {
    data: string
}

type UpdateStatusProfileType = {
    resultCode : number,
    messages:Array<string>,
    data: {}
}
export const getProfile = {
    getProfile(idUser: number) {
        return instance.get<ProfileType>(`profile/${idUser}`)
            .then(response => response.data)
    },
    getStatusProfile(idUser: number) {
        return instance.get<getStatusProfileType>(`profile/status/${idUser}`)
            .then(response => response)
    },
    updateStatusProfile(status: string) {
        return instance.put<UpdateStatusProfileType>(`profile/status/`, {
            status: status
        })
    }
}

type DeleteFollowType = {
    data : boolean
}
type PostFollowType = {
    resultCode : number,
    messages:Array<string>,
    data: {}
}
export const followStatus = {
    deleteFollow(userId: number) {
        return instance.delete<DeleteFollowType>(`follow/${userId}`)
            .then(response => response.data)
    },
    postFollow(userId: number) {
        return instance.post<PostFollowType>(`follow/${userId}`)
            .then(response => response.data)
    },
}

type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

type LoginType = {
    resultCode: number
    messages: Array<string>,
    data: {
        userId: number
    }
}
type LogoutType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

type EditProfile = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

export type DataEditProfile = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts:ContactsType
}
export const authorization = {
    login(data : LoginDataType) {
        return instance.post<LoginType>(`auth/login`, {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,

        })
            .then(response => response.data)
    },
    logOut() {
        return instance.delete<LogoutType>(`auth/login`)
            .then(response => response.data)
    },

    editProfile(data : DataEditProfile) {
        return instance.put<EditProfile>('profile', {
            userId: data.userId,
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            fullName: data.fullName,
            aboutMe: data.aboutMe,
            contacts: {
                github: data.contacts.github,
                vk: data.contacts.vk,
                facebook: data.contacts.facebook,
                instagram: data.contacts.instagram,
                twitter: data.contacts.twitter,
                website: data.contacts.website,
                youtube: data.contacts.youtube,
                mainLink: data.contacts.mainLink,
            }
        })
            .then(response => response.data)
    }
}




