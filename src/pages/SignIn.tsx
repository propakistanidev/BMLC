import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import SignImage from '../assets/SignInPageImage.png'
import Logo from '../assets/logo.png'
import toast from 'react-hot-toast'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const USERS = {
        admin: {
            email: 'admin@bmlc.com',
            password: 'Admin!123',
        },
        user: {
            email: 'user@bmlc.com',
            password: 'User!123',
        },
    }

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !password) {
            toast.error('Email and Password are required')
            return
        }

        if (!isValidEmail(email)) {
            toast.error('Invalid email format')
            return
        }

        // Check for Admin
        if (email === USERS.admin.email && password === USERS.admin.password) {
            toast.success('Welcome Admin!')
            setTimeout(() => {
                navigate('/AdminPanel')
            }, 1200)
        }

        // Check for User
        else if (email === USERS.user.email && password === USERS.user.password) {
            toast.success('Welcome User!')
            setTimeout(() => {
                navigate('/UserPanel')
            }, 1200)
        }

        // If credentials don’t match
        else {
            toast.error('Incorrect email or password')
        }
    }

    return (
        <div className="h-screen flex flex-col md:flex-row overflow-hidden w-full">
            <div className="flex w-full">
                {/* Left - Form */}
                <div className="w-1/2 flex items-center justify-center p-10 bg-white relative">
                    {/* Top Nav */}
                    <div
                        className="absolute top-6 left-6 flex items-center gap-2 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <Icon icon="ic:round-arrow-back" className="w-7 h-7 text-gray-700" />
                        <img src={Logo} alt="Logo" className="h-7 w-auto" />
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto mt-8">
                        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">Login</h2>
                        <p className="text-center leading-snug text-2xl text-gray-700 mb-6">Get the coaching you need!</p>



                        {/* Socials */}
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                                <Icon icon="flat-color-icons:google" className="w-5 h-5" />
                                Continue with Google
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                                <Icon icon="ic:baseline-apple" className="w-5 h-5" />
                                Continue with Apple
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300" />
                            <span className="mx-4 text-sm text-gray-500">OR</span>
                            <div className="flex-grow border-t border-gray-300" />
                        </div>

                        {/* Email */}
                        <div className="mb-4 relative">
                            <label className="block text-sm mb-1 text-gray-600">Email</label>

                            {/* Icon inside input */}
                            <div className="absolute left-3 top-9 text-gray-400">
                                <Icon icon="lets-icons:message-light" className="w-5 h-5" />
                            </div>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 py-3 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6 relative">
                            <label className="block text-sm mb-1 text-gray-600">Password</label>

                            {/* Lock icon on the left inside input */}
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                            </div>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 py-3 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                                placeholder="!@#dd4%56"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-[38px] right-3 text-gray-500"
                            >
                                <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#C8B8E8] text-gray-700 shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] hover:bg-[#C8B8E8aa] py-2 rounded-lg font-semibold transition-all"
                        >
                            Sign In  <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </button>



                        <p className="text-sm text-gray-500 text-center mt-10">
                            Don't have an account?{' '}
                            <span
                                className="text-purple-500 font-bold cursor-pointer"
                                onClick={() => navigate('/signuppage')}
                            >
                                Sign Up
                            </span>
                        </p>
                    </form>
                </div>

                {/* Right - Image */}
                <div className="w-1/2 h-full hidden md:block">
                    <img src={SignImage} alt="Sign In" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}