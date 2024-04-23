import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const route: string | undefined = process.env.RANDOM_QUESTION_ROUTE;

  if (!route) return new NextResponse("Error", { status: 500 });

  const response: AxiosResponse = await axios.get(route);
  const responseData: string = response.data.question;

  // console.log("responseData");
  // console.log(responseData);

  return new NextResponse(responseData, { status: 200 });
}
