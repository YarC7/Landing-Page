import { NextResponse } from 'next/server';
import { signJWT } from '@/lib/jwt';
import { cookies } from 'next/headers';
import { verifyUser } from '@/prisma-db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Verify user credentials against database
    const user = await verifyUser(email, password);

    if (user) {
      const token = await signJWT({ 
        id: user.id,
        email: user.email,
        name: user.name 
      });
      
      // Set JWT token in HTTP-only cookie
      const cookieStore = await cookies();
      cookieStore.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });
      console.log("Login successful");

      return NextResponse.json(
        { 
          success: true, 
          message: 'Login successful',
          user: {
            id: user.id,
            email: user.email,
            name: user.name
          }
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
} 