export type apiProps = {
    product: productProps[],
    category: categoryProps[]
}

export type productProps = {
    Name: string,
    Category: string,
    Price: number,
    Quantity: number,
    Description: string
}

export type categoryProps = {
    Name: string
}

export type orderProps = {
    Name: string,
    // Category: string,
    Price: number,
    Quantity: number,
    MaxQuantity: number,
    Description: string
}

export type UserForm = {
    Name: string,
    Block: number | null,
    Level: number | null,
    Unit: number | null,
}