import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export async function POST(req: NextRequest) {
  const { status } = await req.json(); // Expecting 'status' instead of 'accepted'

  if (status === undefined) {
    return NextResponse.json(
      { message: "Status must be provided." },
      { status: 400 }
    );
  }

  try {
    const response = await axios.post(
      "http://79.175.167.223/accounts/api/v1/request/accept/",
      { status } // Sending 'status'
    );
    return NextResponse.json(response.data, { status: response.status });
  } catch (err) {
    const axiosError = err as AxiosError<ErrorResponse>;
    const errorMessage =
      axiosError.response?.data?.message || "Internal server error";
    return NextResponse.json(
      { message: errorMessage },
      { status: axiosError.response?.status || 500 }
    );
  }
}
