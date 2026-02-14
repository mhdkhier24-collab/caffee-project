// app/api/orders/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
    const body = await req.json();
    const filePath = path.join(process.cwd(), "data/orders.json");

    // اقرأ الطلبات القديمة
    const orders = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
        : [];

    // اضف الطلب الجديد
    orders.push({ ...body, createdAt: new Date().toISOString() });

    // احفظ كل الطلبات
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    return NextResponse.json({ success: true });
}