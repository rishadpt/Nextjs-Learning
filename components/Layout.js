import Layoutstyle from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'
import Meta from './Meta'
const Layout = ({children}) => {
    return (
        <>
        <Meta/>
        <Nav/>
        <div className={Layoutstyle.container}>
            <main className={Layoutstyle.main}>
                <Header/>
            {children}
            </main>
        </div>
        </>
    )
}
export default Layout