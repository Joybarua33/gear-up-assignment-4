export interface IGeraPayload {
    title : string,
    description : string,
    brand : string,
    pricePerDay : string,
    isAvailable :  boolean,

    categoryId : string 
    image? : string[],
}

export interface IUpdateGear {
    title?: string,
    description : string,
    brand : string,
    pricePerDay : string,
    isAvailable :  boolean,

    categoryId : string 
    image? : string[],
}