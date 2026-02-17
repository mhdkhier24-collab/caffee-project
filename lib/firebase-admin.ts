import admin from "firebase-admin";

let app: admin.app.App;

if (!admin.apps.length) {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    app = admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID!,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
            privateKey: privateKey!,
        }),
    });
} else {
    app = admin.app();
}

export const db = admin.firestore(app);
