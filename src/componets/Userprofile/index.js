import "./index.css"

const Userprofile = (props) => {
    const {userDetails} = props
    const {imageUrl,name,role} = userDetails
    return(
    <li className="container">
        <img src= {imageUrl} className="avatar" alt="avatar"/>
    <div className="name_container">
        <h1 className="name">{name}</h1>
        <p className="role">{role}</p>
    </div>
    </li>
    )
}
export default Userprofile