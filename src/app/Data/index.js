import React from 'react'
import { Icon } from '@iconify/react';

export const topbar = [
    {
        path: '/',
        icon: <Icon icon="fa-solid:phone" />,
        phone: '0123456789',
        links: [
            {
                path: '/',
                title: 'Buy',
            },
            {
                path: '/',
                title: 'Rent',
            },
            {
                path: '/',
                title: 'House Prices',
            },
            {
                path: '/',
                title: 'Find Agent',
            },
            {
                path: '/',
                title: 'Commercial',
            },
            {
                path: '/',
                title: 'Inspire',
            },
            {
                path: '/',
                title: 'Overseas',
            },
        ],
    },
];

export const footer = [
    {
        title: "Get in touch",
        Links: [
            {icon: <Icon icon="ic:baseline-email" />, title: "lettings@danhamzltd.co.uk", url:"lettings@danhamzltd.co.uk"},
            {icon: <Icon icon="fa-solid:phone" />, title: "0113 2042900", url:"http://www.danhamz.co.uk"},
            {icon: <Icon icon="mdi:location" />, title: "Danhamz Properties", url:"https://maps.app.goo.gl/jzycnuUX5n543ZXz9"},
            
        ],
        find: "Find us on social media",
        social: [
            {icon: <Icon icon="devicon:facebook" />, title: "Danhamz", url:"https://www.facebook.com/Danhamz/",},
            {icon: <Icon icon="mdi:instagram" />, title: "@danhamz_sales", url:"https://www.linkedin.com/company/19620881/admin/feed/posts/"},
            {icon: <Icon icon="logos:twitter" />, title: "Follow us on Twitter", url:"https://twitter.com/Danhamzleedsltd"},
            {icon: <Icon icon="ri:linkedin-fill" />, title: "Connect on LinkedIn", url:"https://www.instagram.com/danhamz_1/"},
        ]
    },
    // {
    //     title: "Customer links",
    //     Links: [
    //         {title: "Estate Agents in leeds", url:""},
    //         {title: "Block Property Management Leeds", url:""},
    //         {title: "Students Accomodation Leeds", url:""},
    //         {title: "Letting Agents Pudsey", url:""},
    //         {title: "Estate Agent Services", url:""},
    //         {title: "Property Resource Leeds", url:""},
    //         {title: "Property Development leeds", url:""},
    //         {title: "Danhamz Investor Club", url:""},
    //         {title: "Report A Repair", url:""},
    //         {title: "Areas Covered", url:""},
    //         {title: "Careers at Danhamz", url:""},
    //     ]
    // },
    // {
    //     title: "Legal Policies",
    //     Links: [
    //         {title: "Terms", url: ""},
    //         {title: "Privacy Policy", url: ""},
    //         {title: "Client Money Handling", url: ""},
    //         {title: "Sitemap", url: ""},
    //         {title: "Our Fees", url: ""},
    //         {title: "Complaints", url: ""},
    //     ]
    // },
    // {
    //     logo: "/images/investor_logo.png",
    //     Links: [
    //         {title: "Home of Property Ltd trading as Danhamz"},
    //         {title: "Registered in England, Company Number 6804475."},
    //         {title: "Danhamz Horsforth is accredited by PropertyMark."},
    //         {title: "VAT Number 323 659 887. ICO Number Z2040400."},
    //         {title: "Home of Property Ltd trading as"},
    //         {title: "Danhamz Horsforth is accredited by PropertyMark."},
    //         {title: "Danhamz is accredited by SafeAgent with accreditation number A6303."},
    //     ]
    // }

]

export const socialMedia = [
    {
        icon: <Icon icon="devicon:facebook" />,
        title: "Facebook",
        url:"https://www.facebook.com/Danhamz/",
    },
    {
        title: "Twitter",
        icon: <Icon icon="iconoir:x" />,
        url:"https://twitter.com/Danhamzleedsltd",
    },
    {
        title: "Instagram",
        icon: <Icon icon="skill-icons:instagram" />,
        url:" https://www.linkedin.com/company/19620881/admin/feed/posts/",
    },
    {
        title: "LinkedIn",
        icon: <Icon icon="skill-icons:linkedin" />,
        url:"https://www.instagram.com/danhamz_1/",
    }
]

export const propertyCard = [
    {
        img:"/images/card_1.jpeg",
        title:"Sold house prices",
        desc: "Check what a home sold for plus photos, floor plans and local area insight",
        more: "Search house prices",
    },
    {
        img:"/images/card_2.jpg",
        title:"The most view homes of 2023",
        desc: "Take a look at the homes that have captivated the nation this year.",
        more: "Visit the Danhamz Blog",
    },
    {
        img:"/images/card_3.jpg",
        title:"We swapped london renting for the countryside",
        desc: "Rebecca and Tommy moved to new-build home with energy saving feature",
        more: "Find out more",
    },
]

export const testimonials = [
    {
        icon: <Icon icon="gala:search" />,
        title: "Free home valuation",
        desc: "Find out how much your home's worth from an expert",
        more: "Get a free agent valuation",
    },
    {
        icon: <Icon icon="bi:building" />,
        title: "Commercial property",
        desc: "Search freehold and leasehold commercial properties in the UK",
        more: "Search now",
    },
    {
        icon: <Icon icon="game-icons:light-bulb" />,
        title: "Energy efficiency",
        desc: "Check a home's energy rating and find out how to improve it",
        more: "Learn more",
    },
]

export const slider = [
    {
        img:"/images/bg_1.webp",
        title: "Your Property Is Our Priority",
        info:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your"
    },
    {
        img:"/images/bg_2.webp",
        title: "Modern House Make Better Life",
        info:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your"
    },
    {
        img:"/images/bg_3.webp",
        title: "Let Your Home Be Unique & Stylist",
        info:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your"
    },
    {
        img:"/images/bg_4.webp",
        title: "Modern House Make Better Life",
        info:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your"
    },
]