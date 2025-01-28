/*???????????????????????????
    ?�Уңϣʣţã� �Σ��ͣ�:
    �ӣգ£ڣţң� �ףȣ��ԣӣ��У� �ͣ� �£ϣ�
    
    ?�ģţ֣ţ̣ϣУţ�
     �ͣ� �ƣң��Σ� 
     
    ? �ͣ� �ԣţ���
     �أţң� �ãϣģţң�
     
    ? �ϣգ� �ףţ£ӣɣԣ�
     https://github.com/ZwSyntax/SUBZERO-MD

? �ԣң� �ģţãң٣УԣɣΣ� �ɣ� �٣ϣ� �ã���?

????????????????????????????????*/



const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "👑", // Reaction emoji when the command is triggered
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
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});
