import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import AddToCartIcon from "../../assests/icons/logo512.svg"
import Cart from "../Cart"
import SearchBox from "../UI/Search"
import { logout } from "../../actions/auth"
import { useSelector, useDispatch } from "react-redux"
const Header = ({ count, items, onHandleEvent }) => {
    const history = useHistory();
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
    <header>
        <div className="nav-brand">
            <a to="/">
                <span>KMart+&nbsp;</span>
                <img src = {AddToCartIcon} alt="KMart+ Logo" 
                width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"  margin-inline-start="10"></img>
            </a>
        </div>
        <div className="searchBox-container">
            <SearchBox/>
        </div>
        { 
            authState && authState.idToken ?
                <div className="user-actions">
                    <button title="User Profile" className="material-icons">account_circle</button>
                    <button onClick={logoutHandler} title="Logout" className="material-icons">logout</button>
                </div>
            :
            <button className="login-btn" onClick={() => history.push("/login")}>Login</button>
        }
        <div className="cart-container">
           <Cart/>
        </div>
    </header>
    )
}

export default Header