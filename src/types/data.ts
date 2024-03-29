

export type UserType={
    email:string,
    password:string,
    name:string
}

export type ProductType={
    id:number,
    name:string,
    price:number,
    description:string,
    image:File | string,
    qdt?:number,
    category:string
}

export type cartType={
    user:UserType,
    products:ProductType[],
    totalCart:number
}