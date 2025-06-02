import { NextRequest, NextResponse } from 'next/server';
import { sanity } from '../../../lib/sanity';

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    await sanity.create({
      _type: 'contactSubmission',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      company: data.company,
      message: data.message,
      createdAt: new Date().toISOString(),
    });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ success: false, error: err instanceof Error ? err.message : 'An unknown error occurred' }, { status: 500 });
  }
} 