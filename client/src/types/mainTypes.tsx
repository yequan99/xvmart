export type ApiProps = {
    product: ProductProps[],
    category: CategoryProps[],
    qrcode: string
}

export type ProductProps = {
    Name: string,
    Category: string,
    Price: number,
    Quantity: number,
    Description: string,
    ID: string,
    Picture_Name: string,
    ImageURL: string
}

export type AddProductProps = {
    Name: string,
    Category: string,
    Price: number,
    Quantity: number,
    Description: string,
    Picture_Name: string,
}

export type CategoryProps = {
    Name: string,
    ID: string
}

export type OrderProps = {
    Name: string,
    Price: number,
    Quantity: number,
    MaxQuantity: number,
    Description: string,
    ImageURL: string
}

export type SendOrderProps = {
    Item: string,
    Price: number,
    Quantity: number,
    Description: string,
    Name: string,
    Block: number | null,
    Level: number | null,
    Unit: number | null,
    Date: string
}

export type UserFormProps = {
    Name: string,
    Block: number | null,
    Level: number | null,
    Unit: number | null,
}

export type GetOrderProps = {
    Name: string,
    Block: string,
    Level: string,
    Unit: string,
    Date: string,
    Item: string,
    Quantity: number,
    Price: number,
    Description: string,
    ID: string
}