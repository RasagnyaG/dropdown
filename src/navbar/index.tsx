
import NavItem from '../navItem'
import "./navbar.css"

const navItems = [
    {
        name: "New",
        path: '/new'
    },
    {
        name: "Whisky",
        path: '/gin',
        sub_navs: [
            {
                name: "Scotch",
                path: '/scotch'
            },
            {
                name: 'Bourbon',
                path: '/bourbon'
            },
            {
                name: "Blended",
                path: '/scotch'
            },
            {
                name: "Rye",
                path: '/scotch'
            },
            {
                name: "Japanese",
                path: '/scotch'
            },
            {
                name: "Indian",
                path: '/scotch'
            },
            {
                name: "Canadian",
                path: '/scotch'
            }
        ]
    },
    {
        name: 'Vodka',
        path: '/vodka',
    },
    {
        name: 'Gin',
        path: '/gin',
    },
    {
        name: 'Non-Alcholic',
        path: '/non-alcholic',
        sub_navs: [
            {
                name: "Spirits",
                path: '/scotch'
            },
            {
                name: "Beers",
                path: '/scotch'
            },
            {
                name: "Other",
                path: '/scotch'
            }
        ]
    },
    {
        name: 'Others',
        path: '/',
        sub_navs: [
            {
                name: "Spirits",
                path: '/scotch',
                sub_navs: [
                    {
                        name: 'Cognac',
                        path: '/'
                    },
                    {
                        name: 'Rum',
                        path: '/'
                    },
                    {
                        name: 'Cachaca',
                        path: '/'
                    },
                    {
                        name: 'Tequila',
                        path: '/'
                    },
                    {
                        name: 'Calvados',
                        path: '/'
                    },
                    {
                        name: 'Armagnac',
                        path: '/'
                    },
                    {
                        name: 'Liqueurs',
                        path: '/'
                    },
                ]
            },
            {
                name: "Wine",
                path: '/scotch',
                sub_navs: [
                    {
                        name: 'Red Wine',
                        path: '/'
                    },
                    {
                        name: 'White Wine',
                        path: '/'
                    },
                    {
                        name: 'Rose',
                        path: '/'
                    },
                    {
                        name: 'Champagne',
                        path: '/'
                    },
                    {
                        name: 'Sparkling',
                        path: '/'
                    },
                    {
                        name: 'Madeira',
                        path: '/'
                    },
                ]
            },
            {
                name: 'Beers',
                path: '/beers'
            }
        ]
    }
]

const Navbar = () => {
    return (

        <div className='navbar'>
            {
                navItems.map((e) => <NavItem name={e.name} path={e.path} sub_navs={e.sub_navs} nested={false}></NavItem>)
            }
        </div >

    )
}

export default Navbar
