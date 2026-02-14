import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data/orders.json");

export default function AdminPage() {
    const data = fs.existsSync(dataFile)
        ? JSON.parse(fs.readFileSync(dataFile, "utf-8"))
        : [];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Panel - Orders</h1>
            {data.length === 0 ? (
                <p>No orders yet.</p>
            ) : (
                <ul>
                    {data.map((order: any) => (
                        <li key={order.id} className="mb-2 border p-2 rounded">
                            <p><strong>{order.name}</strong> - ${order.total}</p>
                            <p>Shots: {order.shots}</p>
                            {order.milk && <p>Milk: {order.milk}</p>}
                            {order.flavors?.length > 0 && <p>Flavors: {order.flavors.join(", ")}</p>}
                            {order.extras?.length > 0 && <p>Extras: {order.extras.join(", ")}</p>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}