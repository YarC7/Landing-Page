'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { setIsAuth } from "@/lib/features/auth/authSlice";
export default function LogoutButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (res.ok) {
        router.push('/login');
        dispatch(setIsAuth(false));
        router.refresh();
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="cursor-pointer"
      aria-label="Logout"
    >
      <LogOut />
    </button>
  );
} 