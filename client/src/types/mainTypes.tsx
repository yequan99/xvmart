export type ApiProps = {
    product: ProductProps[],
    category: CategoryProps[]
}

export type ProductProps = {
    Name: string,
    Category: string,
    Price: number,
    Quantity: number,
    Description: string
}

export type CategoryProps = {
    Name: string
}

export type OrderProps = {
    Name: string,
    // Category: string,
    Price: number,
    Quantity: number,
    MaxQuantity: number,
    Description: string
}

export type UserFormProps = {
    Name: string,
    Block: number | null,
    Level: number | null,
    Unit: number | null,
}