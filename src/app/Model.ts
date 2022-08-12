export interface DoctorModel{
    name:string,
    address:string,
    nobatType:string,
    imgUrl:string,
    city:string,
    Specialty:Specialty[],
    star:number
}

export interface Specialty{
    name:string,
    link:string,
}

export interface Specialty {
    name:string,
    link:string
}

export interface city {
    name:string,
    slug:string
}

export interface area {
    name:string,
    slug:string,
    citySlug:string
}