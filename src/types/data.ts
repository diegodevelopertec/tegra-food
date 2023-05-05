

export type UserType={
    email:string,
    password:string,
    name:string
}

export type ProductType={
    id:number,
    name:string,
    price:number,
    priceDefault:number,
    ingredientes:string,
    image:string,
    qdt:number,
}

export type cartType={
    user:UserType,
    products:ProductType[],
    totalCart:number
}