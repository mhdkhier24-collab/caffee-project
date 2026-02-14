
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json(); // استلم البيانات من الفورم
        console.log("Contact form submitted:", data);

        // هنا نقدر نضيف أي عملية مستقبلية مثل إرسال إيميل أو حفظ قاعدة بيانات

        return NextResponse.json(
            { message: "Message received successfully!" },
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