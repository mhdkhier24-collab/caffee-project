export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
    const db = getDb(); // <-- استدعي هنا

    try {
        const data = await req.json();

        await db.collection("contacts").add({
            ...data,
            submittedAt: new Date().toISOString(),
        });

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}


