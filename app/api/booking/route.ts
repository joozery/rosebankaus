import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    console.log('New Booking Received:', body);

    // Mock successful booking
    return NextResponse.json({ 
      success: true, 
      message: 'Table reserved successfully!',
      bookingId: Math.random().toString(36).substr(2, 9).toUpperCase()
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process booking.' 
    }, { status: 500 });
  }
}
