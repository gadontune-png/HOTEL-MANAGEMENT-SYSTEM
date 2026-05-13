// src/Pages/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(false)
  const [role, setRole] = useState('guest')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!form.email || !form.password) {
      setError('Please fill in all required fields.')
      return
    }
    if (isSignup && !form.name) {
      setError('Please enter your full name.')
      return
    }

    // Role-based redirect
    if (role === 'guest') {
      navigate('/home')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-800 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-5xl">🏨</span>
          <h1 className="text-3xl font-bold text-white mt-2">LuxStay</h1>
          <p className="text-amber-200 text-sm mt-1">Hotel Management System</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          
          {/* Tab Toggle */}
          <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${!isSignup ? 'bg-amber-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${isSignup ? 'bg-amber-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Role Selector */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I am a...
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setRole('guest')}
                className={`flex-1 py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all duration-200
                  ${role === 'guest'
                    ? 'border-amber-900 bg-amber-50 text-amber-900'
                    : 'border-gray-200 text-gray-500 hover:border-amber-300'}`}
              >
                🧳 Guest
              </button>
              <button
                onClick={() => setRole('staff')}
                className={`flex-1 py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all duration-200
                  ${role === 'staff'
                    ? 'border-amber-900 bg-amber-50 text-amber-900'
                    : 'border-gray-200 text-gray-500 hover:border-amber-300'}`}
              >
                👔 Staff
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name - signup only */}
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Morgan Ombati"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-xs">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-900 hover:bg-amber-800 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 mt-2"
            >
              {isSignup ? 'Create Account' : 'Login'}
            </button>

          </form>

          {/* Bottom text */}
          <p className="text-center text-xs text-gray-400 mt-6">
            {isSignup ? 'Already have an account? ' : "Don't have an account? "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-amber-800 font-medium hover:underline"
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>

        </div>

        <p className="text-center text-amber-300 text-xs mt-6">
          © {new Date().getFullYear()} LuxStay. All rights reserved.
        </p>

      </div>
    </div>
  )
}

export default Login