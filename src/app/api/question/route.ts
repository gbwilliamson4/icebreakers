import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const route: string = process.env.RANDOM_QUESTION_ROUTE!;

  const response: AxiosResponse = await axios.get(route);
  const responseData: string = response.data.question;

  // console.log("responseData");
  // console.log(responseData);

  return new NextResponse(responseData, { status: 200 });
}
