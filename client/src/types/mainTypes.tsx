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