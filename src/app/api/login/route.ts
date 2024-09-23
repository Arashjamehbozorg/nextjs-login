// src/app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    const response = await axios.post(
      "http://79.175.167.223/accounts/api/v1/login/token/",
      { username, password }
    );
    return NextResponse.json({ token: response.data.token }, { status: 200 });
  } catch (err) {
    const axiosError = err as AxiosError<ErrorResponse>;
    return NextResponse.json(
      {
        message: axiosError.response?.data?.message || "Internal server error",
      },
      { status: axiosError.response?.status || 500 }
    );
  }
}
