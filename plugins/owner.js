/*???????????????????????????
    ?£Ð£Ò£Ï£Ê£Å£Ã£Ô £Î£Á£Í£Å:
    £Ó£Õ£Â£Ú£Å£Ò£Ï £×£È£Á£Ô£Ó£Á£Ð£Ð £Í£Ä £Â£Ï£Ô
    
    ?£Ä£Å£Ö£Å£Ì£Ï£Ð£Å£Ò
     £Í£Ò £Æ£Ò£Á£Î£Ë 
     
    ? £Í£Ù £Ô£Å£Á£Í
     £Ø£Å£Ò£Ï £Ã£Ï£Ä£Å£Ò£Ó
     
    ? £Ï£Õ£Ò £×£Å£Â£Ó£É£Ô£Å
     https://github.com/ZwSyntax/SUBZERO-MD

? £Ô£Ò£Ù £Ä£Å£Ã£Ò£Ù£Ð£Ô£É£Î£Ç £É£Æ £Ù£Ï£Õ £Ã£Á£Î?

????????????????????????????????*/



const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "ðŸ‘‘", // Reaction emoji when the command is triggered
    alias: ["silent", "kerm"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+263719647303'; // Replace this with the actual owner number
        const ownerName = '?? ?????'; // Replace this with the owner's name
        const organization = '???? ?????s'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `This is the owner's contact: ${ownerName}`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+263719647303') + '+18062212660<@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mekÂ });
Â Â Â Â }
});
