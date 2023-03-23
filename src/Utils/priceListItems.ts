export type priceListItems = {
    id: number
    title: string
    paragraph: string
    price: number
    part?: string
}

const priceListItemsArrey: priceListItems[] = [
    {
        id: 111,
        title: 'Deep Tissue',
        paragraph: 'A therapeutic massage that used for relieving muscles.',
        price: 48,
        part: 'first',
    },
    {
        id: 112,
        title: 'Body Scrub',
        paragraph: 'Perfect way to relieve all that unwanted stress in body.',
        price: 18,
        part: 'first',
    },
    {
        id: 113,
        title: 'Foot Massage',
        paragraph:
            'Get a relaxing massage focused on your feet and lower legs.',
        price: 25,
        part: 'first',
    },
    {
        id: 114,
        title: 'Scalp Treatments',
        paragraph:
            'Superior gray creates a rich, natural look with less fading.',
        price: 15,
        part: 'first',
    },
    {
        id: 115,
        title: 'Full Massage',
        paragraph: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 75,
        part: 'first',
    },
    {
        id: 116,
        title: 'Fertility Massage',
        paragraph: 'Help support reproductive health, the menstrual cycle.',
        price: 18,
        part: 'second',
    },
    {
        id: 117,
        title: 'Blemish Buster',
        paragraph: 'Deep cleansing facial rebalances to promote healthy skin.',
        price: 40,
        part: 'second',
    },
    {
        id: 118,
        title: 'Oxygen Facial',
        paragraph: 'Hydrates, tones, lifts, and adds radiance to the skin.',
        price: 32,
        part: 'second',
    },
    {
        id: 119,
        title: 'Lash Lift',
        paragraph:
            'Treatment for natural lashes that can add curl and definition.',
        price: 25,
        part: 'second',
    },
    {
        id: 120,
        title: 'Clear Chakra',
        paragraph:
            'Cupiditate aspernatur deserunt recusandae et nulla eum minus odio ratione porro eveniet! Nemo incidunt dolores magni itaque!',
        price: 175,
        part: 'second',
    },
]

export default priceListItemsArrey
