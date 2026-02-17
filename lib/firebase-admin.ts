import admin from "firebase-admin";

let db: admin.firestore.Firestore;

export function getDb() {
    if (!admin.apps.length) {
        // اقرأ JSON من Environment Variable مباشرة
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!);

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }

    db = admin.firestore();
    return db;
}
