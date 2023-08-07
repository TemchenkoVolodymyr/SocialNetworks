export type UsersType = {
    name: string | null,
    id: number | null,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null | string,
    followed: boolean
}

export type UsersComponentType = {
    user: Array<UsersType>,
    totalCount: number,
    currentPageData: (page : number) => void,
    isProgress: Array<number>,
    followThunkCreator: (userId:number,callback:() => void) => void,
    pageSize: number,
    current: any
}

export type DataType = {
    user: Array<UsersType>,
    totalCount: number,
    currentPageData: (page : number) => void,
    isProgress: Array<number>,
    followThunkCreator: () => void,
    pageSize: number,
    current: any
}



export type UsersComponentDataType = {
    data:Array<DataType>
}
