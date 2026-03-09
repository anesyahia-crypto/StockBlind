// stockService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkStockLevels() {
    const lowStockItems = await prisma.product.findMany({
        where: {
            currentStock: {
                lte: prisma.product.fields.minThreshold // Stock <= Min Threshold
            }
        }
    });

    lowStockItems.forEach(item => {
        console.log(`ALERT: ${item.name} is running low in ${item.locationId}!`);
        // Here you would trigger your WhatsApp/SMS API (like Twilio)
    });
}