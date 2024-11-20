import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_URL);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "fetching error..." },
        { status: response.status }
      );
    }
    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Data didn't fetch!");

    return NextResponse.json({
      success: false,
      message: "Error occured",
      error: error.message,
    });
  }
}