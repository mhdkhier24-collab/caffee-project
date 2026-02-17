export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        await db.collection("orders").add({
            ...body,
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
