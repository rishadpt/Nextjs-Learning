import Headerstyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={Headerstyle.h1}>Hack<span className={Headerstyle.span}>philes</span></h1>
            <p className={Headerstyle.description}>Subscribe to our channel for more videos.</p>
        </div>
    )
}


export default Header