import axios, { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const route: string | undefined = process.env.RANDOM_QUESTION_ROUTE;

  if (!route)
    return new NextResponse("Error. API route not defined", { status: 500 });

  const response: AxiosResponse = await axios.get(route);
  const responseData: string = response.data.question;

  return new NextResponse(responseData, { status: 200 });
}
