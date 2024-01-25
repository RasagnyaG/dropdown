
import NavItem from '../navItem'

const Home = () => {
    return (

        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <NavItem name='name 1' path='/n' sub_navs={[{ name: "n1", path: '/n' }, { name: "n1", path: '/' }, { name: "n1", path: '/' }]} />
            <NavItem name='name 1' path='/' sub_navs={[{ name: "n1", path: '/' }, { name: "n1", path: '/' }, { name: "n1", path: '/' }]} />
            <NavItem name='name 1' path='/' sub_navs={[{ name: "n1", path: '/' }, { name: "n1", path: '/' }, { name: "n1", path: '/' }]} />
            <NavItem name='name 1' path='/' sub_navs={[{ name: "n1", path: '/' }, { name: "n1", path: '/' }, { name: "n1", path: '/' }]} />
            <NavItem name='name 1' path='/' />
        </div>

    )
}

export default Home
