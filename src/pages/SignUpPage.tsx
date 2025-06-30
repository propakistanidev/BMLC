
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

    const validatePassword = (value) => ({
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        lower: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[^A-Za-z0-9]/.test(value)
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!name) newErrors.name = 'Name is required'
        if (!email) newErrors.email = 'Email is required'
        if (!password) newErrors.password = 'Password is required'
        if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
        if (password && confirmPassword && password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
        setErrors(newErrors)
        if (Object.keys(newErrors).length === 0) console.log('Form is valid')
    }

    const requirements = validatePassword(password)
    const allMet = Object.values(requirements).every(Boolean)

    return (
        <div className="h-screen w-full flex">
            {/* Left Side */}
            <div className="w-1/2 flex flex-col justify-between px-10 py-8 bg-white">
                {/* Logo & Back */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <Icon icon="ic:round-arrow-back" className="w-6 h-6 text-gray-700" />
                    <img src={Logo} alt="Logo" className="h-6 w-auto" />
                </div>

                {/* Form */}
                <div className="flex flex-col justify-center flex-1 max-w-md w-full mx-auto">
                    <h2 className="text-3xl font-semibold text-[#27272A] text-center mb-2">Meet our coaches</h2>
                    <p className='text-center text-[#27272A] text-sm mb-6'>Learn more about their background and their coaching experience</p>

                    {/* Social Sign Up */}
                    <div className="flex flex-col gap-4 mb-6">
                        <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                            <Icon icon="flat-color-icons:google" className="w-5 h-5" />
                            Sign up with Google
                        </button>
                        <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                            <Icon icon="ic:baseline-apple" className="w-5 h-5" />
                            Sign up with Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-sm text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Name */}
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3 relative">
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

                        {/* Requirements */}
                        {!allMet && (
                            <ul className="text-xs mt-2 space-y-1">
                                {Object.entries(requirements).map(([key, valid]) => (
                                    <li key={key} className="flex items-center gap-2">
                                        <Icon icon={valid ? 'qlementine-icons:check-tick-16' : 'oui:cross-in-circle-empty'} className={`w-4 h-4 ${valid ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className={`${valid ? 'text-green-500' : 'text-red-500'}`}>
                                            {{
                                                length: 'At least 8 characters',
                                                upper: 'One uppercase letter',
                                                lower: 'One lowercase letter',
                                                number: 'One number',
                                                special: 'One special character'
                                            }[key]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4 relative">
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
                        className="w-full bg-[#C8B8E8] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] text-black py-2 rounded-lg font-semibold"
                    >
                        Sign Up <span className="ml-4">→</span>
                    </button>
                </div>

                {/* Bottom Text */}
                <p className="text-sm text-gray-500 text-center mt-4">
                    Already have an account?{' '}
                    <span className="text-purple-400 font-semibold cursor-pointer" onClick={() => navigate('/signin')}>
                        Sign In
                    </span>
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/2 hidden md:block">
                <img src={SignImage} alt="Sign Up" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}