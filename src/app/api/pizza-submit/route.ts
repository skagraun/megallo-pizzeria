/**
 * Pizza Submission API Endpoint
 *
 * Handles POST requests for custom pizza submissions.
 * Currently a DUMMY implementation that always returns success.
 *
 * TODO: Implement actual email sending with Resend API when ready for production.
 *
 * Expected request body:
 * {
 *   pizzaName: string,
 *   email: string,
 *   sauce: string,
 *   toppings: string[],
 *   totalPrice: number
 * }
 */

import { NextRequest, NextResponse } from 'next/server';

// Type definition for the request body
interface PizzaSubmissionRequest {
  pizzaName: string;
  email: string;
  sauce: string;
  toppings: string[];
  totalPrice: number;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: PizzaSubmissionRequest = await request.json();

    // Validate required fields
    if (!body.pizzaName || !body.email || !body.sauce) {
      return NextResponse.json(
        {
          success: false,
          message: 'Hiányzó mezők! Kérjük töltsd ki az összes kötelező mezőt.',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Érvénytelen email cím formátum.',
        },
        { status: 400 }
      );
    }

    // Log the submission (for development/debugging)
    console.log('=== New Pizza Submission ===');
    console.log('Pizza name:', body.pizzaName);
    console.log('Email:', body.email);
    console.log('Sauce:', body.sauce);
    console.log('Toppings:', body.toppings.join(', '));
    console.log('Total price:', body.totalPrice, 'Ft');
    console.log('===========================');

    // TODO: Implement actual email sending here
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@megallopizzeria.hu',
    //   to: 'info@megallopizzeria.hu',
    //   subject: `Új pizza beküldés: ${body.pizzaName}`,
    //   html: `<h1>Új pizza beküldés</h1>...`,
    // });

    // Simulate a small delay (like a real API would have)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'A pizza sikeresen beküldve! Köszönjük a kreációdat!',
    });
  } catch (error) {
    console.error('Pizza submission error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Hiba történt a beküldés során. Kérjük próbáld újra később!',
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      message: 'Ez az endpoint csak POST kéréseket fogad.',
    },
    { status: 405 }
  );
}
