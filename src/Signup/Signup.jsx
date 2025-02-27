import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import bgImage from "../assets/backgroundimages.jpg";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        qualification: "",
        letterpad: "",
        firstName: "",
        lastName: "",
        email: "",
        displayName: "",
        countryCode: "",
        phoneNumber: "",
        appointmentNumber: "",
        pmdc: "",
    });

    const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-opacity-70 p-10 rounded-lg w-[50%] shadow-lg bg-transparent relative">
                <button onClick={() => navigate("/login")} className="absolute top-4 left-4 text-blue-600 hover:text-blue-800">
                    <ArrowLeft size={24} />
                </button>

                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Personal Information</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    {[
                        { label: "Qualification", name: "qualification", placeholder: "Enter your Qualification" },
                        { label: "Design Your Letterpad", name: "letterpad", placeholder: "Enter your Letterpad Design" },
                        { label: "First Name", name: "firstName", placeholder: "Enter your First Name" },
                        { label: "Last Name", name: "lastName", placeholder: "Enter your Last Name" },
                        { label: "Email", name: "email", type: "email", placeholder: "Enter your Email" },
                        { label: "Display Name", name: "displayName", placeholder: "Enter your Display Name" },
                        { label: "Country Code", name: "countryCode", placeholder: "Enter your Country Code" },
                        { label: "Phone Number", name: "phoneNumber", type: "tel", placeholder: "Enter your Phone Number" },
                        { label: "Appointment Number", name: "appointmentNumber", placeholder: "Enter your Appointment Number" },
                        { label: "PMDC Number", name: "pmdc", placeholder: "Enter your PMDC Number" },
                    ].map(({ label, name, type = "text", placeholder }) => (
                        <div key={name} className="flex flex-col">
                            <label className="block font-medium text-gray-300">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                placeholder={placeholder}
                                className="w-full px-3 py-2 mt-1 border rounded-lg bg-[#000D2F] text-white outline-none focus:ring-blue-500 placeholder-gray-400"
                                required
                            />
                            {formData[name].trim() === "" && (
                                <span className="text-red-400 text-sm mt-1">Fill this {label.toLowerCase()}</span>
                            )}
                        </div>
                    ))}
                    <div className="col-span-2">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full py-2 mt-4 text-white font-bold rounded-lg transition ${isFormValid
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
