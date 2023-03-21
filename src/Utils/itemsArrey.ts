export type Items = {
    id: number
    img: string
    title: string
    paragraph: string
    price: number
    likeCount: number
}

const itemsArrey: Items[] = [
    {
        id: 1,
        img: '/images/img_card1.png',
        title: 'Meditation & Harmony',
        paragraph:
            'Your wellness goals and the areas of preference, then unwind with a customized massage experience.',
        price: 399,
        likeCount: 421,
    },
    {
        id: 2,
        img: '/images/img_card2.png',
        title: 'Body Treatments',
        paragraph:
            'Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized ',
        price: 249,
        likeCount: 567,
    },
    {
        id: 3,
        img: '/images/img_card3.png',
        title: 'Hair & Beauty',
        paragraph:
            'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
        price: 449,
        likeCount: 346,
    },
    {
        id: 4,
        img: '/images/img_card4.png',
        title: 'Skin program',
        paragraph:
            'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
        price: 399,
        likeCount: 596,
    },
    {
        id: 5,
        img: '/images/img_card5.png',
        title: 'Thai massage & Relax',
        paragraph:
            'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
        price: 850,
        likeCount: 824,
    },
    {
        id: 6,
        img: '/images/img_card6.png',
        title: 'Sauna & Calmness',
        paragraph:
            'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked..',
        price: 1150,
        likeCount: 1144,
    },
]

export const getProductsObject = (array: Items[]) =>
    array.reduce(
        (object, item) => ({
            ...object,
            [item.id]: item,
        }),
        {}
    )

export default itemsArrey
