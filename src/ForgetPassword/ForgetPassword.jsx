import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import bgImage from "../assets/backgroundimages.jpg";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

    
        if (!email) {
            setError("Email is required!");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email address!");
        } else {
            setError("");
            alert("Password reset link sent to your email!");
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-opacity-90 p-8 rounded-lg w-[90%] max-w-md shadow-lg bg-[#000D2F] text-center">
    
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-5 left-5 flex items-center text-gray-700 hover:text-blue-600"
                >
                    
                </button>
                <FaArrowLeft className="mr-2" /> 
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Forget Password
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <FaEnvelope className="absolute left-3 top-3 text-gray-500 text-lg" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-blue-700 gap-2 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                    >
                        <FaPaperPlane className="text-lg" />
                        Send Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
