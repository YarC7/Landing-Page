// pages/profile.tsx
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">
        <Image
          src="/avatar.png" // Put your image in public folder as public/profile.jpg
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full mx-auto"
        />
        <h1 className="text-2xl font-bold mt-4">Cray Nguyễn</h1>
        <p className="text-gray-600 mt-2">Software Engineer. Passionate about building web apps & solving real problems.</p>

        <div className="mt-4">
          <a href="mailto:cray@example.com" className="text-blue-600 hover:underline block">
            cray@example.com
          </a>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
