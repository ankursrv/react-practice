import { Link } from "react-router-dom";

const Card =({title, discription, goToPageText, goToPageLink})=>{
    return(
        <div className="bg-darkBlue p-8 text-center rounded-lg flex flex-col justify-center h-full">
            <h4 className="text-white font-bold text-2xl">{title}</h4>
            <p className="text-white text-lg my-5">{discription}</p>
            <Link to={goToPageLink} className="text-pinkPrimary underline">{goToPageText}</Link>
        </div>
    );
}
export default Card ;