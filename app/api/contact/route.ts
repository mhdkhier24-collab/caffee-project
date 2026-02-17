import { NextRequest, NextResponse } from "next/server";
import admin from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        await admin.firestore().collection("contacts").add({
            ...data,
            submittedAt: new Date().toISOString(),
        });

        return NextResponse.json(
            { message: "Message received and saved successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 500 }
        );
    }
}
