export interface SignUp{
    name:string,
    email:string,
    password:string
}

export interface Login{
    email:string,
    password:string
}

export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined|number,
    productId:undefined|number
}

export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number|undefined,
    quantity:undefined|number,
    userId:number,
    productId:number
}

export interface priceSummary{
    price:number,
    discount:number,
    delivery:number,
    total:number,
    tax:number
}

export interface order{
    email:string,
    contact:string,
    totalprice:number,
    userId:number,
    address:string,
    id:number|undefined
}