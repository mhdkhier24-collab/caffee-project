
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json(); // استلم البيانات من الفورم
        console.log("Contact form submitted:", data);

        // تحديد مسار ملف contact.json
        const filePath = path.join(process.cwd(), "data", "contact.json");

        // قراءة الملف الحالي
        let currentData: any[] = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            currentData = JSON.parse(fileContent);
        }

        // إضافة البيانات الجديدة
        currentData.push({
            ...data,
            submittedAt: new Date().toISOString(),
        });

        // كتابة الملف مرة ثانية
        fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");

        return NextResponse.json(
            { message: "Message received and saved successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 500 }
        );
    }
}
