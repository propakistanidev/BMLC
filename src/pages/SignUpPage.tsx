import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import SignImage from '../assets/SignInPageImage.png'
import Logo from '../assets/Logo.png'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validatePassword = (value) => {
        return {
            length: value.length >= 8,
            upper: /[A-Z]/.test(value),
            lower: /[a-z]/.test(value),
            number: /[0-9]/.test(value),
            special: /[^A-Za-z0-9]/.test(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}


        if (!name) newErrors.name = 'Name is required'
        if (!email) newErrors.email = 'Email is required'
        if (!password) newErrors.password = 'Password is required'
        if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
        if (password && confirmPassword && password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match'

        setErrors(newErrors)
        if (Object.keys(newErrors).length === 0) {
            console.log('Form is valid')
        }
    }

    const requirements = validatePassword(password)
    const allMet = Object.values(requirements).every(Boolean)

    return (
        <div className="h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Left - Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-6 bg-white relative">
                <div className="absolute top-6 left-6 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <Icon icon="ic:round-arrow-back" className="w-6 h-6 text-gray-700" />
                    <img src={Logo} alt="Logo" className="h-6 w-auto" />
                </div>

                <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto mt-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1 text-gray-600">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'}`}
                            placeholder="Your name"
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1 text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'}`}
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-4 relative">
                        <label className="block text-sm mb-1 text-gray-600">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'}`}
                            placeholder="***************"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-500">
                            <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} className="w-5 h-5" />
                        </button>
                        {!allMet && (
                            <ul className="text-xs mt-2 space-y-1">
                                <li className="flex items-center gap-2">
                                    <Icon icon={requirements.length ? 'qlementine-icons:check-tick-16' : 'oui:cross-in-circle-empty'} className={`w-4 h-4 ${requirements.length ? 'text-green-500' : 'text-red-500'}`} /><span className={`${requirements.length ? 'text-green-500' : 'text-red-500'}`}>
                                        At least 8 characters</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon={requirements.upper ? 'qlementine-icons:check-tick-16' : 'oui:cross-in-circle-empty'} className={`w-4 h-4 ${requirements.upper ? 'text-green-500' : 'text-red-500'}`} />
                                    <span className={`${requirements.upper ? 'text-green-500' : 'text-red-500'}`}>One uppercase letter</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon={requirements.lower ? 'qlementine-icons:check-tick-16' : 'oui:cross-in-circle-empty'} className={`w-4 h-4 ${requirements.lower ? 'text-green-500' : 'text-red-500'}`} /><span className={`${requirements.lower ? 'text-green-500' : 'text-red-500'}`}>
                                        One lowercase letter</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon={requirements.number ? 'qlementine-icons:check-tick-16' : 'oui:cross-in-circle-empty'} className={`w-4 h-4 ${requirements.number ? 'text-green-500' : 'text-red-500'}`} /> <span className={`${requirements.number ? 'text-green-500' : 'text-red-500'}`}>
                                        One number</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon={requirements.special ? 'qlementine-icons:check-tick-16' : 'oui:cross-in-circle-empty'} className={`w-4 h-4 ${requirements.special ? 'text-green-500' : 'text-red-500'}`} /> <span className={`${requirements.special ? 'text-green-500' : 'text-red-500'}`}>
                                        One special character</span>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6 relative">
                        <label className="block text-sm mb-1 text-gray-600">Re-enter Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'}`}
                            placeholder="***************"
                        />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-9 text-gray-500">
                            <Icon icon={showConfirmPassword ? 'mdi:eye-off' : 'mdi:eye'} className="w-5 h-5" />
                        </button>
                        {confirmPassword && password !== confirmPassword && (
                            <div className="flex items-center gap-2 text-sm text-red-500 mt-2">
                                <Icon icon="oui:cross-in-circle-empty" className="w-4 h-4" />
                                Passwords do not match
                            </div>
                        )}
                        {confirmPassword && password === confirmPassword && (
                            <div className="flex items-center gap-2 text-sm text-green-600 mt-2">
                                <Icon icon="qlementine-icons:check-tick-16" className="w-4 h-4" />
                                Passwords match
                            </div>
                        )}
                        {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#C8B8E8] hover:bg-purple-400 hover:text-white text-black py-2 rounded-lg font-semibold transition-all"
                    >
                        Sign Up
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-sm text-gray-500">or</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                            <Icon icon="flat-color-icons:google" className="w-5 h-5" />
                            Sign up with Google
                        </button>
                        <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                            <Icon icon="ic:baseline-apple" className="w-5 h-5" />
                            Sign up with Apple
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 text-center mt-8">
                        Already have an account?{' '}
                        <span className="text-purple-400 font-semibold cursor-pointer" onClick={() => navigate('/signin')}>
                            Sign In
                        </span>
                    </p>
                </form>
            </div >

            {/* Right - Image */}
            < div className="w-full md:w-1/2 hidden md:block" >
                <img src={SignImage} alt="Sign Up" className="w-full h-full object-cover" />
            </div >
        </div >
    )
}