import React from 'react';
import { Apple, Smartphone } from 'lucide-react'; // Using some available icons as placeholders
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full bg-black text-white font-sans">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-zinc-900">
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-2">Welcome back</h1>
            <p className="text-zinc-400 text-sm">Login to your Acme Inc account</p>
          </div>

          <form
            className=""
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/dashboard');
            }}
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
              <input 
                className="w-full p-3 rounded-md border border-zinc-800 bg-zinc-800 text-white text-sm outline-none transition-colors duration-200 focus:border-white"
                type="email" 
                id="email" 
                placeholder="m@example.com" 
                autoComplete="email"
              />
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-white">Password</label>
                <a href="#" className="text-zinc-400 text-xs no-underline hover:underline hover:text-white">Forgot your password?</a>
              </div>
              <input 
                className="w-full p-3 rounded-md border border-zinc-800 bg-zinc-800 text-white text-sm outline-none transition-colors duration-200 focus:border-white"
                type="password" 
                id="password" 
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="w-full p-3 bg-white text-black border-none rounded-md font-semibold cursor-pointer transition-colors duration-200 mt-4 hover:bg-zinc-200">
              Login
            </button>
          </form>

          <div className="flex items-center my-6 text-zinc-500 text-xs uppercase">
            <div className="flex-1 h-px bg-zinc-800"></div>
            <span className="px-2">Or continue with</span>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>

          <div className="flex gap-4">
            <button type="button" aria-label="Login with Apple" className="flex-1 p-2 bg-transparent border border-zinc-800 rounded-md text-white cursor-pointer flex justify-center items-center transition-colors duration-200 hover:bg-zinc-800">
              <Apple className="w-5 h-5" />
            </button>
            <button type="button" aria-label="Login with Google" className="flex-1 p-2 bg-transparent border border-zinc-800 rounded-md text-white cursor-pointer flex justify-center items-center transition-colors duration-200 hover:bg-zinc-800">
              {/* Google icon usually requires a custom SVG, using Command as placeholder */}
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>G</span> 
            </button>
            <button type="button" aria-label="Login with Other" className="flex-1 p-2 bg-transparent border border-zinc-800 rounded-md text-white cursor-pointer flex justify-center items-center transition-colors duration-200 hover:bg-zinc-800">
               <Smartphone className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-zinc-400">
            Don't have an account? 
            <a href="#" className="text-white underline ml-1 cursor-pointer hover:text-zinc-200">Sign up</a>
          </div>
        </div>
      </div>

      {/* Right Section - Image/Placeholder */}
      <div className="flex-1 bg-zinc-800 flex justify-center items-center relative overflow-hidden">
        {/* Placeholder pattern */}
        <div className="absolute w-full h-full bg-[radial-gradient(#3f3f46_1px,transparent_1px)] bg-[length:20px_20px] opacity-50" />
        
        {/* Placeholder for the image/graphic */}
        <div className="z-10 text-zinc-700 w-[100px] h-[100px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;
