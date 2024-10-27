import { NavLink } from "react-router-dom"

const Subheader = () => {
    return (
    <div className={"subheader-container"}>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/Packaged-Foods">Packaged Foods</NavLink></li>
            <li><NavLink exact to="/Personal-Care">Personal Care</NavLink></li>
            <li><NavLink exact to="/Mobiles">Mobiles</NavLink></li>
            <li><NavLink exact to="/Laptops">Laptops</NavLink></li>
            {/* <li><a href="">Home</a></li>
            <li><a href="">Category 1</a></li>
            <li><a href="">Category 2</a></li>
            <li><a href="">Category 3</a></li>
            <li><a href="">Category 4</a></li> */}
        </ul>
    </div>
    )
}

export default Subheader;