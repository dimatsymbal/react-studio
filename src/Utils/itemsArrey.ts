export type Items = {
    id: number
    image: string
    title: string
    paragraph: string
    price: number
    likes: number
}

// const itemsArrey: Items[] = [
//     {
//         id: 1,
//         image: '/images/img_card1.png',
//         title: 'Meditation & Harmony',
//         paragraph:
//             'Your wellness goals and the areas of preference, then unwind with a customized massage experience.',
//         price: 399,
//         likes: 174,
//     },
//     {
//         id: 2,
//         image: '/images/img_card2.png',
//         title: 'Body Treatments',
//         paragraph:
//             'Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized ',
//         price: 1049,
//         likes: 684,
//     },
//     {
//         id: 3,
//         image: '/images/img_card3.png',
//         title: 'Hair & Beauty',
//         paragraph:
//             'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
//         price: 249,
//         likes: 214,
//     },
//     {
//         id: 4,
//         image: '/images/img_card4.png',
//         title: 'Skin program',
//         paragraph:
//             'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
//         price: 650,
//         likes: 449,
//     },
//     {
//         id: 5,
//         image: '/images/img_card5.png',
//         title: 'Thai massage & Relax',
//         paragraph:
//             'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
//         price: 150,
//         likes: 1149,
//     },
//     {
//         id: 6,
//         image: '/images/img_card6.png',
//         title: 'Sauna & Calmness',
//         paragraph:
//             'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
//         price: 700,
//         likes: 949,
//     },
// ]

export const getProductsObject = (array: Items[]) =>
    array.reduce(
        (object, item) => ({
            ...object,
            [item.id]: item,
        }),
        {}
    )

// export default itemsArrey
