// import { NextRequest, NextResponse } from "next/server";
// import axios, { AxiosError } from "axios";

// interface ErrorResponse {
//   message: string;
// }

// export async function POST(req: NextRequest) {
//   const { status } = await req.json(); // Expecting 'status' instead of 'accepted'

//   if (status === undefined) {
//     return NextResponse.json(
//       { message: "Status must be provided." },
//       { status: 400 }
//     );
//   }

//   try {
//     const response = await axios.post(
//       "http://79.175.167.223/accounts/api/v1/request/accept/",
//       { status } // Sending 'status'
//     );
//     return NextResponse.json(response.data, { status: response.status });
//   } catch (err) {
//     const axiosError = err as AxiosError<ErrorResponse>;
//     const errorMessage =
//       axiosError.response?.data?.message || "Internal server error";
//     return NextResponse.json(
//       { message: errorMessage },
//       { status: axiosError.response?.status || 500 }
//     );
//   }
// }
// src/app/api/login/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import axios, { AxiosError } from "axios";

// interface ErrorResponse {
//   message: string;
// }

// export async function POST(req: NextRequest) {
//   const { status } = await req.json();

//   try {
//     const response = await axios.post(
//       "http://79.175.167.223/accounts/api/v1/request/accept/",
//       { status }
//     );
//     return NextResponse.json({ token: response.data.token }, { status: 200 });
//   } catch (err) {
//     const axiosError = err as AxiosError<ErrorResponse>;
//     return NextResponse.json(
//       {
//         message: axiosError.response?.data?.message || "Internal server error",
//       },
//       { status: axiosError.response?.status || 500 }
//     );
//   }
// }
// import { NextRequest, NextResponse } from "next/server";

// interface ErrorResponse {
//   message: string;
// }

// export async function POST(req: NextRequest) {
//   try {
//     const { status } = await req.json();

//     if (status === undefined) {
//       return NextResponse.json(
//         { message: "Status must be provided." },
//         { status: 400 }
//       );
//     }

//     // Use the built-in fetch API to send the request to the external server
//     const token = req.headers.get("authorization")?.replace("Token ", "");
//     const response = await fetch(
//       "http://79.175.167.223/accounts/api/v1/request/accept/",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Token ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status }),
//       }
//     );

//     // Parse the response from the external API
//     const data = await response.json();

//     if (!response.ok) {
//       return NextResponse.json(
//         { message: data.message || "Internal server error" },
//         { status: response.status }
//       );
//     }

//     return NextResponse.json(data, { status: response.status });
//   } catch (err) {
//     const errorMessage =
//       err instanceof Error ? err.message : "Internal server error";
//     return NextResponse.json({ message: errorMessage }, { status: 500 });
//   }
// }
