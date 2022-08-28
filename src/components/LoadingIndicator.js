import { FaSpinner } from "react-icons/fa";

const LoadingIndicator = () => {
    return (
        <div className="Loading_container">
            <FaSpinner size={30} className="loading_icon" />
        </div>
    )
};

export default LoadingIndicator