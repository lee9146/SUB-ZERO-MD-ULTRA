/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "animegirl",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *sᴜʙᴢᴇʀᴏ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ɢɪʀʟ ɪᴍᴀɢᴇs* 👸\n\n\n *🧬© sᴜʙᴢᴇʀᴏ-ᴍᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl1",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *sᴜʙᴢᴇʀᴏ ᴍᴅ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ɢɪʀʟ ɪᴍᴀɢᴇs* 👸\n\n\n *🧬©sᴜʙᴢᴇʀᴏ ᴍᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl2",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *sᴜʙᴢᴇʀᴏ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ɢɪʀʟ ɪᴍᴀɢᴇs* 👸\n\n\n *🧬© sᴜʙᴢᴇʀᴏ ʙʏ ᴍʀ ғʀᴀɴᴍ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl3",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *sᴜʙᴢᴇʀᴏ ᴍᴅ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ɢɪʀʟ ɪᴍᴀɢᴇs* 👸\n\n\n *🧬©sᴜʙᴢᴇʀᴏ ᴍᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl4",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *sᴜʙᴢᴇʀᴏ ᴍᴅ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ɢɪʀʟ ɪᴍᴀɢᴇs* 👸\n\n\n *🧬©sᴜʙᴢᴇʀᴏ ᴍᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl5",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *sᴜʙᴢᴇʀᴏ ᴍᴅ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ɢɪʀʟ ɪᴍᴀɢᴇs* 👸\n\n\n *🧬©sᴜʙᴢᴇʀᴏ ᴍᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "loli",
    alias: ["lolii"],
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🐱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *sᴜʙᴢᴇʀᴏ ᴍᴅ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ɢɪʀʟ ɪᴍᴀɢᴇs* 👸\n\n\n *🧬©sᴜʙᴢᴇʀᴏ ᴍᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});
