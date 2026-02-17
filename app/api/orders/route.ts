import { NextResponse } from "next/server";
import admin from "@/lib/firebase-admin";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        await admin.firestore().collection("orders").add({
            ...body,
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Error saving order" },
            { status: 500 }
        );
    }
}
