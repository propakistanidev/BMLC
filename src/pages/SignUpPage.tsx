
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import SignImage from '../assets/SignInPageImage.png'
import Logo from '../assets/Logo.png'

// Type definitions
interface FormErrors {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    general?: string
}

interface PasswordRequirements {
    length: boolean
    upper: boolean
    lower: boolean
    number: boolean
    special: boolean
}

interface SignUpFormData {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }


    const validatePassword = (value: string): PasswordRequirements => ({
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        lower: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[^A-Za-z0-9]/.test(value)
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        setIsSubmitting(true)

        const newErrors: FormErrors = {}

        // Validate name
        if (!name.trim()) {
            newErrors.name = 'Name is required'
        } else if (name.trim().length < 6) {
            newErrors.name = 'Name must be at least 6 characters'
        }

        // Validate email
        if (!email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        // Validate password
        if (!password) {
            newErrors.password = 'Password is required'
        } else {
            const passwordRequirements = validatePassword(password)
            if (!Object.values(passwordRequirements).every(Boolean)) {
                newErrors.password = 'Password does not meet all requirements'
            }
        }

        // Validate confirm password
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password'
        } else if (password && confirmPassword && password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            try {
                // TODO: Replace with actual API call
                const userData: Omit<SignUpFormData, 'confirmPassword'> = {
                    name: name.trim(),
                    email: email.trim(),
                    password: password
                }
                console.log('Signing up user:', { name: userData.name, email: userData.email })
                // Simulate API call
                await new Promise<void>(resolve => setTimeout(resolve, 1000))
                // Navigate to success page or dashboard
                navigate('/dashboard')
            } catch (error: unknown) {
                console.error('Sign up failed:', error)
                const errorMessage = error instanceof Error ? error.message : 'Sign up failed. Please try again.'
                setErrors({ general: errorMessage })
            }
        }

        setIsSubmitting(false)
    }

    const requirements = validatePassword(password)
    const allMet = Object.values(requirements).every(Boolean)

    return (
        <div className="h-screen w-full flex flex-col lg:flex-row overflow-hidden">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 lg:py-2 bg-white overflow-y-auto">
                {/* Logo & Back */}
                <div className="flex items-center gap-2 cursor-pointer mb-4 lg:mb-0" onClick={() => navigate('/')}>
                    <Icon icon="ic:round-arrow-back" className="w-6 h-6 text-gray-700" />
                    <img src={Logo} alt="Logo" className="h-6 w-auto" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col justify-center flex-1 max-w-md w-full mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#27272A] text-center mb-2">Create Your Account</h2>
                    <p className='text-center text-[#27272A] text-sm mb-6'>Join us and start your journey today</p>

                    {/* General Error Message */}
                    {errors.general && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <div className="flex items-center gap-2">
                                <Icon icon="oui:cross-in-circle-empty" className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 text-sm">{errors.general}</span>
                            </div>
                        </div>
                    )}

                    {/* Social Sign Up */}
                    <div className="flex flex-col gap-3 mb-4">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-3 border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
                            disabled={isSubmitting}
                        >
                            <Icon icon="flat-color-icons:google" className="w-5 h-5" />
                            <span className="hidden sm:inline">Sign up with Google</span>
                            <span className="sm:hidden">Google</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center gap-3 border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
                            disabled={isSubmitting}
                        >
                            <Icon icon="ic:baseline-apple" className="w-5 h-5" />
                            <span className="hidden sm:inline">Sign up with Apple</span>
                            <span className="sm:hidden">Apple</span>
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

                        <div className="relative">
                            {/* Icon on the left inside the input */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <Icon icon='iconoir:user' className="w-5 h-5" />
                            </div>

                            <input
                                type="text"
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg bg-[#F8F6FC] focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'
                                    }`}
                                placeholder="John Doe"
                            />
                        </div>

                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-3 relative">
                        <label className="block text-sm mb-1 text-gray-600">Email</label>

                        {/* Icon on the left */}
                        <div className="absolute left-3 top-9 text-gray-400">
                            <Icon icon="lets-icons:message-light" className="w-5 h-5" />
                        </div>

                        <input
                            type="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            className={`w-full pl-10 py-2 border rounded-lg bg-[#F8F6FC] focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'
                                }`}
                            placeholder="you@example.com"
                        />

                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-3 relative">
                        <label className="block text-sm mb-1 text-gray-600">Password</label>

                        {/* Icon on the left */}
                        <div className="absolute left-3 top-9 text-gray-400">
                            <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                        </div>

                        <input
                            type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            className={`w-full pl-10 px-4 py-2 border rounded-lg bg-[#F8F6FC] focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'
                                }`}
                            placeholder="***************"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 text-gray-500"
                        >
                            <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} className="w-5 h-5" />
                        </button>

                        {/* Requirements */}
                        {!allMet && (
                            <ul className="text-xs mt-2 space-y-1">
                                {Object.entries(requirements).map(([key, valid]) => (
                                    <li key={key} className="flex items-center gap-2">
                                        <Icon
                                            icon={valid ? 'qlementine-icons:check-tick-16' : 'oui:cross-in-circle-empty'}
                                            className={`w-4 h-4 ${valid ? 'text-green-500' : 'text-red-500'}`}
                                        />
                                        <span className={`${valid ? 'text-green-500' : 'text-red-500'}`}>
                                            {{
                                                length: 'At least 8 characters',
                                                upper: 'One uppercase letter',
                                                lower: 'One lowercase letter',
                                                number: 'One number',
                                                special: 'One special character',
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

                        {/* Icon inside input field (left side) */}
                        <div className="absolute left-3 top-9 text-gray-400">
                            <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                        </div>

                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                            className={`w-full pl-10 py-2 border rounded-lg bg-[#F8F6FC] focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 ring-red-300' : 'focus:ring-purple-500'
                                }`}
                            placeholder="***************"
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-9 text-gray-500"
                        >
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

                        {errors.confirmPassword && (
                            <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#C8B8E8] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] text-black py-2.5 rounded-lg font-semibold hover:bg-[#B8A8D8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                    >
                        {isSubmitting ? (
                            <>
                                <Icon icon="eos-icons:loading" className="w-5 h-5 animate-spin" />
                                <span>Signing Up...</span>
                            </>
                        ) : (
                            <>
                                <span>Sign Up</span>
                                <span className="ml-2">→</span>
                            </>
                        )}
                    </button>
                </form>

                {/* Bottom Text */}
                <p className="text-sm text-gray-500 text-center lg:mt-6">
                    Already have an account?{' '}
                    <span className="text-purple-400 font-semibold cursor-pointer hover:text-purple-600 transition-colors" onClick={() => navigate('/signin')}>
                        Sign In
                    </span>
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 hidden lg:block">
                <img src={SignImage} alt="Sign Up" className="w-full h-full object-cover object-center" />
            </div>
        </div >
    )
}