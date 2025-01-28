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
const config = require("../config");
const {
  cmd,
  commands
} = require('../command');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const _0x235552 = {
  pattern: "joinrequests",
  "desc": "Get list of participants who requested to join the group",
  "react": '📋',
  "category": "group",
  filename: __filename
};
cmd(_0x235552, async (_0x4e9b1b, _0x37e247, _0x378499, {
  from: _0x4fd72d,
  q: _0x29e76c,
  reply: _0x14e74a,
  isGroup: _0x250e23
}) => {
  if (!_0x250e23) {
    return _0x14e74a("This command can only be used in a group chat.");
  }
  try {
    console.log("Attempting to fetch pending requests for group: " + _0x4fd72d);
    const _0x2285e0 = await _0x4e9b1b.groupRequestParticipantsList(_0x4fd72d);
    console.log(_0x2285e0);
    if (_0x2285e0.length > 0) {
      let _0x291f66 = "Pending Requests to Join the Group:\n";
      let _0x619041 = [];
      _0x2285e0.forEach(_0x55480f => {
        const _0x34b0d4 = _0x55480f.jid;
        _0x291f66 += "😻 @" + _0x34b0d4.split('@')[0] + "\n";
        _0x619041.push(_0x34b0d4);
      });
      const _0x14f928 = {
        "text": _0x291f66,
        mentions: _0x619041
      };
      await _0x4e9b1b.sendMessage(_0x4fd72d, _0x14f928);
    } else {
      _0x14e74a("No pending requests to join the group.");
    }
  } catch (_0xfb5304) {
    console.error("Error fetching participant requests: " + _0xfb5304.message);
    _0x14e74a("⚠️ An error occurred while fetching the pending requests. Please try again later.");
  }
});
const _0x485005 = {
  "pattern": "allreq",
  "desc": "Approve or reject all join requests",
  "react": '✅',
  "category": "group",
  filename: __filename
};
cmd(_0x485005, async (_0x4c4a0a, _0x22a536, _0x1112a6, {
  from: _0xc86dd7,
  reply: _0x2b6550,
  isGroup: _0x3026e0
}) => {
  if (!_0x3026e0) {
    return _0x2b6550("This command can only be used in a group chat.");
  }
  const _0x31018a = _0x1112a6.body.includes('approve') ? 'approve' : "reject";
  try {
    const _0x4e8760 = await _0x4c4a0a.groupRequestParticipantsList(_0xc86dd7);
    if (_0x4e8760.length === 0) {
      return _0x2b6550("There are no pending requests to manage.");
    }
    let _0x22a341 = "Pending Requests to Join the Group:\n";
    let _0x38af9a = [];
    let _0x76aee7 = [];
    _0x4e8760.forEach(_0x482cd2 => {
      const _0x2b59a7 = _0x482cd2.jid;
      _0x22a341 += "😻 @" + _0x2b59a7.split('@')[0] + "\n";
      _0x38af9a.push(_0x2b59a7);
      _0x76aee7.push(_0x2b59a7);
    });
    const _0xecf38b = {
      text: _0x22a341,
      "mentions": _0x38af9a
    };
    await _0x4c4a0a.sendMessage(_0xc86dd7, _0xecf38b);
    const _0x336c3a = await _0x4c4a0a.groupRequestParticipantsUpdate(_0xc86dd7, _0x76aee7, _0x31018a);
    console.log(_0x336c3a);
    _0x2b6550("Successfully " + _0x31018a + "ed all join requests.");
  } catch (_0x250e3f) {
    console.error("Error updating participant requests: " + _0x250e3f.message);
    _0x2b6550("⚠️ An error occurred while processing the request. Please try again later.");
  }
});
const _0x3bcce0 = {
  "pattern": "disappear",
  "react": "🌪️",
  alias: ['dm'],
  "desc": "Turn on/off disappearing messages.",
  category: "main",
  filename: __filename
};
cmd(_0x3bcce0, async (_0x1264ab, _0x1c8255, _0x2be3d6, {
  from: _0x4fdc3a,
  isGroup: _0x5d0163,
  isAdmins: _0x4b73d7,
  args: _0x2c9e9b
}) => {
  if (!_0x5d0163) {
    const _0x3a84ad = {
      "text": "This command can only be used in groups."
    };
    await _0x1264ab.sendMessage(_0x4fdc3a, _0x3a84ad);
    return;
  }
  if (!_0x4b73d7) {
    const _0xb275e7 = {
      "text": "Only admins can turn on/off disappearing messages."
    };
    await _0x1264ab.sendMessage(_0x4fdc3a, _0xb275e7);
    return;
  }
  const _0x51ea06 = _0x2c9e9b[0];
  if (_0x51ea06 === 'on') {
    const _0x193f23 = _0x2c9e9b[1];
    let _0x1df4d9;
    switch (_0x193f23) {
      case "24h":
        _0x1df4d9 = 86400;
        break;
      case '7d':
        _0x1df4d9 = 604800;
        break;
      case "90d":
        _0x1df4d9 = 7776000;
        break;
      default:
        const _0x890609 = {
          "text": "Invalid duration! Use `24h`, `7d`, or `90d`."
        };
        await _0x1264ab.sendMessage(_0x4fdc3a, _0x890609);
        return;
    }
    const _0x4ad088 = {
      disappearingMessagesInChat: _0x1df4d9
    };
    await _0x1264ab.sendMessage(_0x4fdc3a, _0x4ad088);
    const _0x2b37a1 = {
      "text": "Disappearing messages are now ON for " + _0x193f23 + '.'
    };
    await _0x1264ab.sendMessage(_0x4fdc3a, _0x2b37a1);
  } else {
    if (_0x51ea06 === 'off') {
      const _0x3643ac = {
        "disappearingMessagesInChat": false
      };
      await _0x1264ab.sendMessage(_0x4fdc3a, _0x3643ac);
      const _0x47fcaf = {
        "text": "Disappearing messages are now OFF."
      };
      await _0x1264ab.sendMessage(_0x4fdc3a, _0x47fcaf);
    } else {
      const _0x176df5 = {
        text: "Please use `!disappear on <duration>` or `!disappear off`."
      };
      await _0x1264ab.sendMessage(_0x4fdc3a, _0x176df5);
    }
  }
});
const _0x592aaf = {
  pattern: "senddm",
  react: "🌪️",
  "alias": ["senddisappear"],
  "desc": "Send a disappearing message.",
  "category": "main",
  "filename": __filename
};
cmd(_0x592aaf, async (_0x5551fe, _0x1300f9, _0x1fbb8a, {
  from: _0x188bab,
  isGroup: _0x4c94c4,
  isAdmins: _0x2679c0,
  args: _0x51178a
}) => {
  if (!_0x4c94c4) {
    const _0x423961 = {
      "text": "This command can only be used in groups."
    };
    await _0x5551fe.sendMessage(_0x188bab, _0x423961);
    return;
  }
  if (!_0x51178a.length) {
    const _0x5a20ad = {
      "text": "Please provide a message to send."
    };
    await _0x5551fe.sendMessage(_0x188bab, _0x5a20ad);
    return;
  }
  const _0x3a3ac9 = _0x51178a.join(" ");
  const _0x18e63b = {
    'text': _0x3a3ac9
  };
  const _0x3fd007 = {
    "ephemeralExpiration": 604800
  };
  await _0x5551fe.sendMessage(_0x188bab, _0x18e63b, _0x3fd007);
});
const _0x4f6b5b = {
  "pattern": "mute",
  "react": '🔇',
  "alias": ["close", "f_mute"],
  "desc": "Change to group settings to only admins can send messages.",
  category: "group",
  use: ".mute",
  filename: __filename
};
cmd(_0x4f6b5b, async (_0x4b40bf, _0x46e420, _0x21f531, {
  from: _0x16d660,
  l: _0x2c920b,
  quoted: _0x98d19d,
  body: _0x2d0cee,
  isCmd: _0x43605e,
  command: _0x23d9d0,
  args: _0x4e09a2,
  q: _0x435a11,
  isGroup: _0xd1e600,
  sender: _0x397d4b,
  senderNumber: _0x163246,
  botNumber2: _0x3ee3fe,
  botNumber: _0x364a68,
  pushname: _0x43018a,
  isMe: _0x4ecf33,
  isOwner: _0x3052d4,
  groupMetadata: _0x595d9b,
  groupName: _0x4f1c2f,
  participants: _0x2d1550,
  groupAdmins: _0x2b167e,
  isBotAdmins: _0x568576,
  isCreator: _0x1fe81d,
  isDev: _0x59b3c0,
  isAdmins: _0x5e0e98,
  reply: _0x697f9a
}) => {
  try {
    const _0x19fc8e = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0xd1e600) {
      return _0x697f9a(_0x19fc8e.only_gp);
    }
    if (!_0x5e0e98) {
      const _0x4bf57a = {
        quoted: _0x46e420
      };
      if (!_0x59b3c0) {
        _0x697f9a(_0x19fc8e.you_adm);
        return _0x4bf57a;
      }
    }
    if (!_0x568576) {
      return _0x697f9a(_0x19fc8e.give_adm);
    }
    await _0x4b40bf.groupSettingUpdate(_0x16d660, "announcement");
    const _0x474444 = {
      text: "*Group Chat closed by Admin " + _0x43018a + "* 🔇"
    };
    const _0x1b6661 = {
      "quoted": _0x46e420
    };
    await _0x4b40bf.sendMessage(_0x16d660, _0x474444, _0x1b6661);
  } catch (_0x1ddb14) {
    const _0x28d2e4 = {
      "text": '❌',
      "key": _0x46e420.key
    };
    const _0x2dae93 = {
      "react": _0x28d2e4
    };
    await _0x4b40bf.sendMessage(_0x16d660, _0x2dae93);
    console.log(_0x1ddb14);
    _0x697f9a("❌ *Error Accurated !!*\n\n" + _0x1ddb14);
  }
});
const _0x87e572 = {
  "pattern": "unmute",
  "react": '🔇',
  "alias": ["open", 'f_unmute'],
  "desc": "Change to group settings to all members can send messages.",
  category: 'group',
  "use": ".unmute",
  "filename": __filename
};
cmd(_0x87e572, async (_0x1d32ad, _0x5b4c22, _0x4681d1, {
  from: _0x485de2,
  l: _0x19d1e2,
  quoted: _0x9471da,
  body: _0x4a9b98,
  isCmd: _0x28bc63,
  command: _0x1f206b,
  args: _0x220e84,
  q: _0x356510,
  isGroup: _0x14a7d0,
  sender: _0x4531e7,
  senderNumber: _0x44ee23,
  botNumber2: _0x88df11,
  botNumber: _0x3e85e2,
  pushname: _0x2d059b,
  isMe: _0x3eff46,
  isOwner: _0xf07b83,
  groupMetadata: _0x3ac276,
  groupName: _0x217df6,
  participants: _0x13a134,
  groupAdmins: _0x5d0412,
  isBotAdmins: _0x292886,
  isCreator: _0x26d4c4,
  isDev: _0x3a8707,
  isAdmins: _0x3c91ba,
  reply: _0x4f95d7
}) => {
  try {
    const _0xbc7a1e = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x14a7d0) {
      return _0x4f95d7(_0xbc7a1e.only_gp);
    }
    if (!_0x3c91ba) {
      const _0x377117 = {
        quoted: _0x5b4c22
      };
      if (!_0x3a8707) {
        _0x4f95d7(_0xbc7a1e.you_adm);
        return _0x377117;
      }
    }
    if (!_0x292886) {
      return _0x4f95d7(_0xbc7a1e.give_adm);
    }
    await _0x1d32ad.groupSettingUpdate(_0x485de2, 'not_announcement');
    const _0x59c538 = {
      text: "*Group Chat Opened by Admin " + _0x2d059b + "* 🔇"
    };
    const _0x2aec2a = {
      "quoted": _0x5b4c22
    };
    await _0x1d32ad.sendMessage(_0x485de2, _0x59c538, _0x2aec2a);
  } catch (_0x13a688) {
    const _0x498e89 = {
      "text": '❌',
      "key": _0x5b4c22.key
    };
    const _0x47bf17 = {
      "react": _0x498e89
    };
    await _0x1d32ad.sendMessage(_0x485de2, _0x47bf17);
    console.log(_0x13a688);
    _0x4f95d7("❌ *Error Accurated !!*\n\n" + _0x13a688);
  }
});
const _0x2bff43 = {
  "pattern": "lockgs",
  react: '🔇',
  "alias": ["lockgsettings"],
  desc: "Change to group settings to only admins can edit group info",
  "category": "group",
  "use": ".lockgs",
  "filename": __filename
};
cmd(_0x2bff43, async (_0x17dcab, _0x51ddfc, _0x92991c, {
  from: _0x245665,
  l: _0x258a07,
  quoted: _0x389910,
  body: _0x8ea8d6,
  isCmd: _0x2de789,
  command: _0x38b535,
  args: _0x156d65,
  q: _0x3bb5b3,
  isGroup: _0x2413cb,
  sender: _0x2850e4,
  senderNumber: _0x2acc63,
  botNumber2: _0x53942b,
  botNumber: _0x86ccd5,
  pushname: _0x3e5138,
  isMe: _0x4d25d4,
  isOwner: _0x253c0b,
  groupMetadata: _0x57aee8,
  groupName: _0x66cfd1,
  participants: _0x5c5045,
  groupAdmins: _0x1480f2,
  isBotAdmins: _0x4d1191,
  isCreator: _0x466fd4,
  isDev: _0x3212b6,
  isAdmins: _0x53eaa0,
  reply: _0x5d57b5
}) => {
  try {
    const _0x4c4c7e = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x2413cb) {
      return _0x5d57b5(_0x4c4c7e.only_gp);
    }
    if (!_0x53eaa0) {
      const _0x18d36c = {
        'quoted': _0x51ddfc
      };
      if (!_0x3212b6) {
        _0x5d57b5(_0x4c4c7e.you_adm);
        return _0x18d36c;
      }
    }
    if (!_0x4d1191) {
      return _0x5d57b5(_0x4c4c7e.give_adm);
    }
    await _0x17dcab.groupSettingUpdate(_0x245665, "locked");
    const _0x4f9b24 = {
      'text': "*Group settings Locked* 🔒"
    };
    const _0x1141e4 = {
      "quoted": _0x51ddfc
    };
    await _0x17dcab.sendMessage(_0x245665, _0x4f9b24, _0x1141e4);
  } catch (_0x28a762) {
    const _0x30fcfa = {
      "text": '❌',
      "key": _0x51ddfc.key
    };
    const _0x307022 = {
      "react": _0x30fcfa
    };
    await _0x17dcab.sendMessage(_0x245665, _0x307022);
    console.log(_0x28a762);
    _0x5d57b5("❌ *Error Accurated !!*\n\n" + _0x28a762);
  }
});
const _0x285abb = {
  pattern: 'unlockgs',
  "react": '🔓',
  alias: ["unlockgsettings"],
  desc: "Change to group settings to all members can edit group info",
  category: "group",
  use: '.unlockgs',
  "filename": __filename
};
cmd(_0x285abb, async (_0x2ae389, _0x60d2b1, _0x22a560, {
  from: _0x2d4e9b,
  l: _0xff3c0a,
  quoted: _0x59f4ba,
  body: _0x160f10,
  isCmd: _0x57c99a,
  command: _0x1a3516,
  args: _0x32dfd2,
  q: _0x41735f,
  isGroup: _0x433848,
  sender: _0x508c17,
  senderNumber: _0x4c9383,
  botNumber2: _0x4707a5,
  botNumber: _0x569d59,
  pushname: _0x529fc3,
  isMe: _0x3ef3e6,
  isOwner: _0x22e265,
  groupMetadata: _0x11fe79,
  groupName: _0xa86994,
  participants: _0x3d5f52,
  groupAdmins: _0x2fa38e,
  isBotAdmins: _0x31dbf2,
  isCreator: _0x5ce901,
  isDev: _0x5f0b90,
  isAdmins: _0x1fb04c,
  reply: _0x515e28
}) => {
  try {
    const _0x24157e = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x433848) {
      return _0x515e28(_0x24157e.only_gp);
    }
    if (!_0x1fb04c) {
      const _0x32aee9 = {
        quoted: _0x60d2b1
      };
      if (!_0x5f0b90) {
        _0x515e28(_0x24157e.you_adm);
        return _0x32aee9;
      }
    }
    if (!_0x31dbf2) {
      return _0x515e28(_0x24157e.give_adm);
    }
    await _0x2ae389.groupSettingUpdate(_0x2d4e9b, 'unlocked');
    const _0x29d71f = {
      text: "*Group settings Unlocked* 🔓"
    };
    const _0x21b52c = {
      "quoted": _0x60d2b1
    };
    await _0x2ae389.sendMessage(_0x2d4e9b, _0x29d71f, _0x21b52c);
  } catch (_0x5f5b2d) {
    const _0x9c6a36 = {
      "text": '❌',
      "key": _0x60d2b1.key
    };
    const _0x2e4f79 = {
      react: _0x9c6a36
    };
    await _0x2ae389.sendMessage(_0x2d4e9b, _0x2e4f79);
    console.log(_0x5f5b2d);
    _0x515e28("❌ *Error Accurated !!*\n\n" + _0x5f5b2d);
  }
});
const _0x2ad4fd = {
  "pattern": "leave",
  "react": '🔓',
  alias: ["left", 'kickme', "f_leave", "f_left", "f-left"],
  "desc": "To leave from the group",
  category: "group",
  "use": ".leave",
  "filename": __filename
};
cmd(_0x2ad4fd, async (_0x1f4ada, _0x3284fb, _0x5665b9, {
  from: _0x2cb4c6,
  l: _0x37734c,
  quoted: _0x6cf87c,
  body: _0x22a173,
  isCmd: _0x1204f0,
  command: _0x4149ba,
  args: _0x1408f9,
  q: _0x54b0dc,
  isGroup: _0xb42f79,
  sender: _0x2a81b1,
  senderNumber: _0x269892,
  botNumber2: _0x281709,
  botNumber: _0x52d284,
  pushname: _0x51965a,
  isMe: _0x57e464,
  isOwner: _0x4437cc,
  groupMetadata: _0x3bbad6,
  groupName: _0x894872,
  participants: _0x1ccfdc,
  groupAdmins: _0x487522,
  isBotAdmins: _0x4a2eec,
  isCreator: _0x46a35b,
  isDev: _0xb7c31e,
  isAdmins: _0x4dbc40,
  reply: _0xbecec9
}) => {
  try {
    const _0x4810ca = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0xb42f79) {
      return _0xbecec9(_0x4810ca.only_gp);
    }
    if (!_0x4dbc40) {
      if (!_0xb7c31e) {
        return _0xbecec9(_0x4810ca.you_adm);
      }
    }
    const _0x2b7926 = {
      text: "*Good Bye All* 👋🏻"
    };
    const _0x3fb4ba = {
      "quoted": _0x3284fb
    };
    await _0x1f4ada.sendMessage(_0x2cb4c6, _0x2b7926, _0x3fb4ba);
    await _0x1f4ada.groupLeave(_0x2cb4c6);
  } catch (_0x490203) {
    const _0x2fc642 = {
      "text": '❌',
      "key": _0x3284fb.key
    };
    const _0x16ad8f = {
      "react": _0x2fc642
    };
    await _0x1f4ada.sendMessage(_0x2cb4c6, _0x16ad8f);
    console.log(_0x490203);
    _0xbecec9("❌ *Error Accurated !!*\n\n" + _0x490203);
  }
});
const _0x293215 = {
  "pattern": 'updategname',
  "react": '🔓',
  "alias": ["upgname", "gname"],
  "desc": "To Change the group name",
  category: "group",
  "use": '.updategname',
  "filename": __filename
};
cmd(_0x293215, async (_0x37d3b2, _0x3d6787, _0x4898d9, {
  from: _0x1a39d2,
  l: _0x36f1d7,
  quoted: _0x41ca5b,
  body: _0x66f306,
  isCmd: _0x4e1117,
  command: _0x13ca93,
  args: _0x253685,
  q: _0x1002e0,
  isGroup: _0x3a6e46,
  sender: _0x35b6df,
  senderNumber: _0x329715,
  botNumber2: _0x121d91,
  botNumber: _0x42f260,
  pushname: _0xe1b5e1,
  isMe: _0x128e34,
  isOwner: _0x13a679,
  groupMetadata: _0x43c179,
  groupName: _0x42e09e,
  participants: _0x3d81a1,
  groupAdmins: _0xeefb48,
  isBotAdmins: _0x23506c,
  isCreator: _0x28cc79,
  isDev: _0x3bed69,
  isAdmins: _0x32bdda,
  reply: _0x5bcaae
}) => {
  try {
    const _0x3a21c3 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x3a6e46) {
      return _0x5bcaae(_0x3a21c3.only_gp);
    }
    if (!_0x32bdda) {
      const _0x41ada9 = {
        'quoted': _0x3d6787
      };
      if (!_0x3bed69) {
        _0x5bcaae(_0x3a21c3.you_adm);
        return _0x41ada9;
      }
    }
    if (!_0x23506c) {
      return _0x5bcaae(_0x3a21c3.give_adm);
    }
    if (!_0x1002e0) {
      return _0x5bcaae("*Please write the new Group Subject* 🖊️");
    }
    await _0x37d3b2.groupUpdateSubject(_0x1a39d2, _0x1002e0);
    const _0x3ef4e7 = {
      'text': "✔️ *Group name Updated*"
    };
    const _0x456852 = {
      "quoted": _0x3d6787
    };
    await _0x37d3b2.sendMessage(_0x1a39d2, _0x3ef4e7, _0x456852);
  } catch (_0x5b57e0) {
    const _0x303093 = {
      text: '❌',
      "key": _0x3d6787.key
    };
    const _0x2e3c53 = {
      "react": _0x303093
    };
    await _0x37d3b2.sendMessage(_0x1a39d2, _0x2e3c53);
    console.log(_0x5b57e0);
    _0x5bcaae("❌ *Error Accurated !!*\n\n" + _0x5b57e0);
  }
});
const _0x19cdd8 = {
  pattern: "updategdesc",
  "react": '🔓',
  alias: ["upgdesc", "gdesc"],
  desc: "To Change the group description",
  "category": "group",
  "use": '.updategdesc',
  "filename": __filename
};
cmd(_0x19cdd8, async (_0x13b839, _0x440c71, _0x29ed74, {
  from: _0x461966,
  l: _0x43e672,
  quoted: _0x55ca79,
  body: _0x3a4dd1,
  isCmd: _0x21655a,
  command: _0x29dc1f,
  args: _0x2666a3,
  q: _0x1fdf7b,
  isGroup: _0x14d322,
  sender: _0x3f1e42,
  senderNumber: _0x252c0c,
  botNumber2: _0x1c5adc,
  botNumber: _0x26ecb6,
  pushname: _0x423e72,
  isMe: _0x4eaf13,
  isOwner: _0x263d2e,
  groupMetadata: _0x52e59b,
  groupName: _0x3d1127,
  participants: _0x239b78,
  groupAdmins: _0x52b9d8,
  isBotAdmins: _0x3f6c04,
  isCreator: _0x1f123c,
  isDev: _0x16c706,
  isAdmins: _0x1ac543,
  reply: _0x44929b
}) => {
  try {
    const _0x4a8ed0 = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x14d322) {
      return _0x44929b(_0x4a8ed0.only_gp);
    }
    if (!_0x1ac543) {
      const _0x58a1dd = {
        quoted: _0x440c71
      };
      if (!_0x16c706) {
        _0x44929b(_0x4a8ed0.you_adm);
        return _0x58a1dd;
      }
    }
    if (!_0x3f6c04) {
      return _0x44929b(_0x4a8ed0.give_adm);
    }
    if (!_0x1fdf7b) {
      return _0x44929b("*Please write the new Group Description* 🖊️");
    }
    await _0x13b839.groupUpdateDescription(_0x461966, _0x1fdf7b);
    const _0x40b8a4 = {
      'text': "✔️ *Group Description Updated*"
    };
    const _0x44d43c = {
      "quoted": _0x440c71
    };
    await _0x13b839.sendMessage(_0x461966, _0x40b8a4, _0x44d43c);
  } catch (_0x227466) {
    const _0x4e9f48 = {
      "text": '❌',
      "key": _0x440c71.key
    };
    const _0x16626d = {
      react: _0x4e9f48
    };
    await _0x13b839.sendMessage(_0x461966, _0x16626d);
    console.log(_0x227466);
    _0x44929b("❌ *Error Accurated !!*\n\n" + _0x227466);
  }
});
const _0x53f490 = {
  "pattern": "join",
  "react": '📬',
  "alias": ["joinme", "f_join"],
  "desc": "To Join a Group from Invite link",
  "category": "group",
  "use": ".join < Group Link >",
  "filename": __filename
};
cmd(_0x53f490, async (_0x5c6e0d, _0x274b96, _0xe24f8, {
  from: _0x4293ac,
  l: _0x1c760f,
  quoted: _0x2f823f,
  body: _0x3ba315,
  isCmd: _0x2eac63,
  command: _0x13619a,
  args: _0x28d7a6,
  q: _0x508e68,
  isGroup: _0x168f6a,
  sender: _0x1e37d6,
  senderNumber: _0x46bea2,
  botNumber2: _0x392b42,
  botNumber: _0x3e8916,
  pushname: _0x23c22f,
  isMe: _0x83607f,
  isOwner: _0xa3e4e3,
  groupMetadata: _0x22f7bf,
  groupName: _0x4f268f,
  participants: _0x56a851,
  groupAdmins: _0x548911,
  isBotAdmins: _0x21d912,
  isCreator: _0x5bf5ca,
  isDev: _0x108bee,
  isAdmins: _0x317502,
  reply: _0x3377b1
}) => {
  try {
    const _0x3bf70c = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x5bf5ca && !_0x108bee && !_0xa3e4e3 && !_0x83607f) {
      return _0x3377b1(_0x3bf70c.own_cmd);
    }
    if (!_0x508e68) {
      return _0x3377b1("*Please write the Group Link*️ 🖇️");
    }
    let _0x2cbcb1 = _0x28d7a6[0].split('https://chat.whatsapp.com/')[1];
    await _0x5c6e0d.groupAcceptInvite(_0x2cbcb1);
    const _0xb649ec = {
      'text': "✔️ *Successfully Joined*"
    };
    const _0x320207 = {
      "quoted": _0x274b96
    };
    await _0x5c6e0d.sendMessage(_0x4293ac, _0xb649ec, _0x320207);
  } catch (_0x344145) {
    const _0x2d8910 = {
      "text": '❌',
      key: _0x274b96.key
    };
    const _0x1b03e2 = {
      "react": _0x2d8910
    };
    await _0x5c6e0d.sendMessage(_0x4293ac, _0x1b03e2);
    console.log(_0x344145);
    _0x3377b1("❌ *Error Accurated !!*\n\n" + _0x344145);
  }
});
const _0x4df201 = {
  "pattern": "invite",
  "react": '🖇️',
  "alias": ["grouplink", 'glink'],
  "desc": "To Get the Group Invite link",
  "category": "group",
  "use": '.invite',
  "filename": __filename
};
cmd(_0x4df201, async (_0x57383d, _0x4f985a, _0x403b00, {
  from: _0x14ace6,
  l: _0x364d6d,
  quoted: _0x45d470,
  body: _0x1a6283,
  isCmd: _0x1a51a8,
  command: _0x383543,
  args: _0x2e3f07,
  q: _0x3ca2ae,
  isGroup: _0xbf8854,
  sender: _0x39f81a,
  senderNumber: _0x1bc585,
  botNumber2: _0x596376,
  botNumber: _0x192325,
  pushname: _0x31cdec,
  isMe: _0x57d6de,
  isOwner: _0x36fc8a,
  groupMetadata: _0x48fae3,
  groupName: _0x4c7a59,
  participants: _0x542fb0,
  groupAdmins: _0x4daafb,
  isBotAdmins: _0x1c9e0f,
  isCreator: _0x4f22a8,
  isDev: _0x27e9cd,
  isAdmins: _0xcc24b9,
  reply: _0x30cf68
}) => {
  try {
    const _0x2d04f9 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0xbf8854) {
      return _0x30cf68(_0x2d04f9.only_gp);
    }
    if (!_0xcc24b9) {
      const _0x2763a3 = {
        quoted: _0x4f985a
      };
      if (!_0x27e9cd) {
        _0x30cf68(_0x2d04f9.you_adm);
        return _0x2763a3;
      }
    }
    if (!_0x1c9e0f) {
      return _0x30cf68(_0x2d04f9.give_adm);
    }
    const _0x37d2e7 = await _0x57383d.groupInviteCode(_0x14ace6);
    const _0x2ecaa6 = {
      text: "🖇️ *Group Link*\n\nhttps://chat.whatsapp.com/" + _0x37d2e7
    };
    const _0x409f05 = {
      "quoted": _0x4f985a
    };
    await _0x57383d.sendMessage(_0x14ace6, _0x2ecaa6, _0x409f05);
  } catch (_0x561c19) {
    const _0x346879 = {
      "text": '❌',
      "key": _0x4f985a.key
    };
    const _0x7557d5 = {
      "react": _0x346879
    };
    await _0x57383d.sendMessage(_0x14ace6, _0x7557d5);
    console.log(_0x561c19);
    _0x30cf68("❌ *Error Accurated !!*\n\n" + _0x561c19);
  }
});
const _0x34bd2a = {
  "pattern": "revoke",
  "react": '🖇️',
  "alias": ["revokegrouplink", "resetglink", 'revokelink', "f_revoke"],
  "desc": "To Reset the group link",
  category: "group",
  "use": ".revoke",
  "filename": __filename
};
cmd(_0x34bd2a, async (_0x41ae16, _0x3e573c, _0x38b41a, {
  from: _0xee597d,
  l: _0x378514,
  quoted: _0x55191b,
  body: _0x3fc193,
  isCmd: _0x1dd591,
  command: _0x221d8e,
  args: _0x38fae6,
  q: _0x36db72,
  isGroup: _0xd97564,
  sender: _0x5ae10e,
  senderNumber: _0x33e2fd,
  botNumber2: _0x5e13ab,
  botNumber: _0x5223f6,
  pushname: _0x256155,
  isMe: _0x3fbbba,
  isOwner: _0x3e8d35,
  groupMetadata: _0x16506d,
  groupName: _0x13822d,
  participants: _0xd56593,
  groupAdmins: _0x149535,
  isBotAdmins: _0x57ebae,
  isCreator: _0x377d4d,
  isDev: _0x45e2dc,
  isAdmins: _0x5ba3b6,
  reply: _0xd38f68
}) => {
  try {
    const _0x2f4bdc = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0xd97564) {
      return _0xd38f68(_0x2f4bdc.only_gp);
    }
    if (!_0x5ba3b6) {
      const _0x193f80 = {
        quoted: _0x3e573c
      };
      if (!_0x45e2dc) {
        _0xd38f68(_0x2f4bdc.you_adm);
        return _0x193f80;
      }
    }
    if (!_0x57ebae) {
      return _0xd38f68(_0x2f4bdc.give_adm);
    }
    await _0x41ae16.groupRevokeInvite(_0xee597d);
    const _0x3bdddc = {
      text: "*Group link Reseted* ⛔"
    };
    const _0xddbc59 = {
      "quoted": _0x3e573c
    };
    await _0x41ae16.sendMessage(_0xee597d, _0x3bdddc, _0xddbc59);
  } catch (_0x1920cf) {
    const _0x2fd8b5 = {
      "text": '❌',
      key: _0x3e573c.key
    };
    const _0x323b31 = {
      "react": _0x2fd8b5
    };
    await _0x41ae16.sendMessage(_0xee597d, _0x323b31);
    console.log(_0x1920cf);
    _0xd38f68("❌ *Error Accurated !!*\n\n" + _0x1920cf);
  }
});
const _0x57538f = {
  "pattern": "kick",
  "react": '🥏',
  "alias": ["remove"],
  "desc": "To Remove a participant from Group",
  category: "group",
  "use": ".kick",
  "filename": __filename
};
cmd(_0x57538f, async (_0x41e259, _0x1b6220, _0x5accc4, {
  from: _0x1405da,
  l: _0x3c5793,
  quoted: _0xddbe82,
  body: _0x38545a,
  isCmd: _0x586340,
  command: _0x515391,
  mentionByTag: _0x5a7b0c,
  args: _0x1ba8bf,
  q: _0x289e78,
  isGroup: _0x4f8fb5,
  sender: _0x3cd0e8,
  senderNumber: _0x153fdb,
  botNumber2: _0xd8495a,
  botNumber: _0x1debc0,
  pushname: _0x3c454b,
  isMe: _0x24f1df,
  isOwner: _0x163b25,
  groupMetadata: _0xb24815,
  groupName: _0x1f20bd,
  participants: _0x300731,
  groupAdmins: _0x373ac7,
  isBotAdmins: _0x16fb62,
  isCreator: _0x5ed285,
  isDev: _0x2a7c41,
  isAdmins: _0x3b32e1,
  reply: _0x4add12
}) => {
  try {
    const _0xf4014e = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x4f8fb5) {
      return _0x4add12(_0xf4014e.only_gp);
    }
    if (!_0x3b32e1) {
      const _0x30adce = {
        'quoted': _0x1b6220
      };
      if (!_0x2a7c41) {
        _0x4add12(_0xf4014e.you_adm);
        return _0x30adce;
      }
    }
    if (!_0x16fb62) {
      return _0x4add12(_0xf4014e.give_adm);
    }
    let _0x3e8f17 = _0x1b6220.mentionedJid ? _0x1b6220.mentionedJid[0] : _0x1b6220.msg.contextInfo.participant || false;
    if (!_0x3e8f17) {
      return _0x4add12("*Couldn't find any user in context* ❌");
    }
    await _0x41e259.groupParticipantsUpdate(_0x1405da, [_0x3e8f17], "remove");
    const _0x44b452 = {
      'text': "*Successfully removed*  ✔️"
    };
    const _0x30c271 = {
      "quoted": _0x1b6220
    };
    await _0x41e259.sendMessage(_0x1405da, _0x44b452, _0x30c271);
  } catch (_0x2c8e2b) {
    const _0x54186c = {
      "text": '❌',
      key: _0x1b6220.key
    };
    const _0x3d2cb9 = {
      react: _0x54186c
    };
    await _0x41e259.sendMessage(_0x1405da, _0x3d2cb9);
    console.log(_0x2c8e2b);
    _0x4add12("❌ *Error Accurated !!*\n\n" + _0x2c8e2b);
  }
});
const _0xd699f4 = {
  pattern: "promote",
  "react": '🥏',
  "alias": ['addadmin'],
  "desc": "To Add a participatant as a Admin",
  "category": 'group',
  use: '.promote',
  "filename": __filename
};
cmd(_0xd699f4, async (_0xd441ad, _0x386107, _0xa0d74e, {
  from: _0x1762c0,
  l: _0x6b3fab,
  quoted: _0x1a22c1,
  body: _0x260161,
  isCmd: _0x1f39c3,
  command: _0x36db16,
  mentionByTag: _0x3f79bc,
  args: _0x4d646e,
  q: _0x1fbf8d,
  isGroup: _0x299bf3,
  sender: _0x11f7a0,
  senderNumber: _0x3246da,
  botNumber2: _0x36be92,
  botNumber: _0x135200,
  pushname: _0x44fecd,
  isMe: _0x3ede2b,
  isOwner: _0x1185ac,
  groupMetadata: _0x3ca1f0,
  groupName: _0x20a13e,
  participants: _0x280437,
  groupAdmins: _0x2cce76,
  isBotAdmins: _0x21032b,
  isCreator: _0x5b91ad,
  isDev: _0x28e3e2,
  isAdmins: _0xd5dab5,
  reply: _0x48bf1f
}) => {
  try {
    const _0x2c5d13 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x299bf3) {
      return _0x48bf1f(_0x2c5d13.only_gp);
    }
    if (!_0xd5dab5) {
      const _0x18103d = {
        quoted: _0x386107
      };
      if (!_0x28e3e2) {
        _0x48bf1f(_0x2c5d13.you_adm);
        return _0x18103d;
      }
    }
    if (!_0x21032b) {
      return _0x48bf1f(_0x2c5d13.give_adm);
    }
    let _0x5c5b44 = _0x386107.mentionedJid ? _0x386107.mentionedJid[0] : _0x386107.msg.contextInfo.participant || false;
    if (!_0x5c5b44) {
      return _0x48bf1f("*Couldn't find any user in context* ❌");
    }
    const _0x110b3d = await getGroupAdmins(_0x280437);
    if (_0x110b3d.includes(_0x5c5b44)) {
      return _0x48bf1f("❗ *User Already an Admin*  ✔️");
    }
    await _0xd441ad.groupParticipantsUpdate(_0x1762c0, [_0x5c5b44], 'promote');
    const _0x5c487e = {
      'text': "*User promoted as an Admin*  ✔️"
    };
    const _0x5a2555 = {
      quoted: _0x386107
    };
    await _0xd441ad.sendMessage(_0x1762c0, _0x5c487e, _0x5a2555);
  } catch (_0x467402) {
    const _0x914163 = {
      "text": '❌',
      "key": _0x386107.key
    };
    const _0x572963 = {
      "react": _0x914163
    };
    await _0xd441ad.sendMessage(_0x1762c0, _0x572963);
    console.log(_0x467402);
    _0x48bf1f("❌ *Error Accurated !!*\n\n" + _0x467402);
  }
});
const _0x10f253 = {
  "pattern": 'demote',
  react: '🥏',
  alias: ["removeadmin"],
  "desc": "To Demote Admin to Member",
  "category": "group",
  "use": ".demote",
  "filename": __filename
};
cmd(_0x10f253, async (_0x9b2f7d, _0x39351b, _0xcc8395, {
  from: _0xe68cad,
  l: _0x7244ea,
  quoted: _0x52f979,
  body: _0x4f94b4,
  isCmd: _0x1a108c,
  command: _0x41f029,
  mentionByTag: _0x2b232a,
  args: _0x256b13,
  q: _0x43014d,
  isGroup: _0x5b6a75,
  sender: _0x1def0f,
  senderNumber: _0x201f82,
  botNumber2: _0x120e3c,
  botNumber: _0x47554d,
  pushname: _0x2b6cae,
  isMe: _0x24a7ee,
  isOwner: _0x10049e,
  groupMetadata: _0xec1693,
  groupName: _0x57285d,
  participants: _0x275dec,
  groupAdmins: _0x174790,
  isBotAdmins: _0x4f333b,
  isCreator: _0x3643ff,
  isDev: _0x3eb57c,
  isAdmins: _0x455273,
  reply: _0x3566a2
}) => {
  try {
    const _0x5577a8 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x5b6a75) {
      return _0x3566a2(_0x5577a8.only_gp);
    }
    if (!_0x455273) {
      const _0x34a16d = {
        'quoted': _0x39351b
      };
      if (!_0x3eb57c) {
        _0x3566a2(_0x5577a8.you_adm);
        return _0x34a16d;
      }
    }
    if (!_0x4f333b) {
      return _0x3566a2(_0x5577a8.give_adm);
    }
    let _0x29e551 = _0x39351b.mentionedJid ? _0x39351b.mentionedJid[0] : _0x39351b.msg.contextInfo.participant || false;
    if (!_0x29e551) {
      return _0x3566a2("*Couldn't find any user in context* ❌");
    }
    const _0x4f0d9c = await getGroupAdmins(_0x275dec);
    if (!_0x4f0d9c.includes(_0x29e551)) {
      return _0x3566a2("❗ *User Already not an Admin*");
    }
    await _0x9b2f7d.groupParticipantsUpdate(_0xe68cad, [_0x29e551], "demote");
    const _0x5d8348 = {
      text: "*User No longer an Admin*  ✔️"
    };
    const _0x293c8d = {
      "quoted": _0x39351b
    };
    await _0x9b2f7d.sendMessage(_0xe68cad, _0x5d8348, _0x293c8d);
  } catch (_0x94836e) {
    const _0x1f05fd = {
      "text": '❌',
      "key": _0x39351b.key
    };
    const _0x1346fb = {
      "react": _0x1f05fd
    };
    await _0x9b2f7d.sendMessage(_0xe68cad, _0x1346fb);
    console.log(_0x94836e);
    _0x3566a2("❌ *Error Accurated !!*\n\n" + _0x94836e);
  }
});
const _0x53a4af = {
  "pattern": "tagall",
  "react": '🔊',
  "alias": ["f_tagall"],
  "desc": "To Tag all Members",
  "category": "group",
  "use": ".tagall",
  "filename": __filename
};
cmd(_0x53a4af, async (_0x18845e, _0x4632c9, _0x55ef21, {
  from: _0x2921e4,
  l: _0xdf8a7f,
  quoted: _0x10158f,
  body: _0x11e711,
  isCmd: _0x11a69a,
  command: _0x4fc745,
  mentionByTag: _0x4bc0e1,
  args: _0x507a0,
  q: _0x82f972,
  isGroup: _0x27faa2,
  sender: _0x12fa8,
  senderNumber: _0x1797a0,
  botNumber2: _0x53e37a,
  botNumber: _0x370958,
  pushname: _0x366640,
  isMe: _0x34a29c,
  isOwner: _0x12be5a,
  groupMetadata: _0x39d18f,
  groupName: _0x3b5423,
  participants: _0x56c772,
  groupAdmins: _0x5b3f7e,
  isBotAdmins: _0x3b20c3,
  isCreator: _0x2833a2,
  isDev: _0x3d6d09,
  isAdmins: _0x18b86b,
  reply: _0xbd5407
}) => {
  try {
    const _0x5aa172 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x27faa2) {
      return _0xbd5407(_0x5aa172.only_gp);
    }
    if (!_0x18b86b) {
      const _0x1c6dca = {
        quoted: _0x4632c9
      };
      if (!_0x3d6d09) {
        _0xbd5407(_0x5aa172.you_adm);
        return _0x1c6dca;
      }
    }
    if (!_0x3b20c3) {
      return _0xbd5407(_0x5aa172.give_adm);
    }
    let _0x3993c3 = "💱 *HI ALL ! GIVE YOUR ATTENTION PLEASE* \n \n";
    for (let _0x445e7a of _0x56c772) {
      _0x3993c3 += "> ᴅᴇᴀʀ ☣️ @" + _0x445e7a.id.split('@')[0] + "\n";
    }
    const _0xb97cc3 = {
      quoted: _0x4632c9
    };
    _0x18845e.sendMessage(_0x2921e4, {
      'text': _0x3993c3,
      'mentions': _0x56c772.map(_0x47d9c6 => _0x47d9c6.id)
    }, _0xb97cc3);
  } catch (_0x1f1f2c) {
    const _0xbc6e6b = {
      "text": '❌',
      "key": _0x4632c9.key
    };
    const _0x305f38 = {
      react: _0xbc6e6b
    };
    await _0x18845e.sendMessage(_0x2921e4, _0x305f38);
    console.log(_0x1f1f2c);
    _0xbd5407("❌ *Error Accurated !!*\n\n" + _0x1f1f2c);
  }
});
const _0x3220aa = {
  pattern: "hidetag",
  "react": '🔊',
  "alias": ["tag", 'f_tag'],
  "desc": "To Tag all Members for Message",
  category: "group",
  "use": ".tag Hi",
  "filename": __filename
};
cmd(_0x3220aa, async (_0x42cc1d, _0x4f5e7e, _0x49808f, {
  from: _0x53e02e,
  l: _0xf27966,
  quoted: _0x499ac3,
  body: _0x35aa48,
  isCmd: _0x580a45,
  command: _0x2dcbc5,
  mentionByTag: _0x586803,
  args: _0x1b98ce,
  q: _0x153bef,
  isGroup: _0x2b35af,
  sender: _0x47dc62,
  senderNumber: _0x22cfc7,
  botNumber2: _0x3555de,
  botNumber: _0x386f73,
  pushname: _0x450314,
  isMe: _0x397067,
  isOwner: _0x46be22,
  groupMetadata: _0x2126df,
  groupName: _0x4ad3fc,
  participants: _0x3b7b63,
  groupAdmins: _0x54e5a2,
  isBotAdmins: _0x2e297e,
  isCreator: _0x46bc7f,
  isDev: _0x2d511d,
  isAdmins: _0x67d41d,
  reply: _0x247340
}) => {
  try {
    const _0x1e63ea = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x2b35af) {
      return _0x247340(_0x1e63ea.only_gp);
    }
    if (!_0x67d41d) {
      const _0x60891f = {
        quoted: _0x4f5e7e
      };
      if (!_0x2d511d) {
        _0x247340(_0x1e63ea.you_adm);
        return _0x60891f;
      }
    }
    if (!_0x2e297e) {
      return _0x247340(_0x1e63ea.give_adm);
    }
    if (!_0x153bef) {
      return _0x247340("*Please add a Message* ℹ️");
    }
    let _0x369546 = '' + _0x153bef;
    const _0x10b59c = {
      "quoted": _0x4f5e7e
    };
    _0x42cc1d.sendMessage(_0x53e02e, {
      'text': _0x369546,
      'mentions': _0x3b7b63.map(_0x50fa51 => _0x50fa51.id)
    }, _0x10b59c);
  } catch (_0x461191) {
    const _0x5b4083 = {
      text: '❌',
      "key": _0x4f5e7e.key
    };
    const _0x3604e5 = {
      "react": _0x5b4083
    };
    await _0x42cc1d.sendMessage(_0x53e02e, _0x3604e5);
    console.log(_0x461191);
    _0x247340("❌ *Error Accurated !!*\n\n" + _0x461191);
  }
});
const _0x446ca7 = {
  "pattern": "taggp",
  react: '🔊',
  alias: ["tggp", 'f_taggp'],
  desc: "To Tag all Members for Message",
  "category": "group",
  use: ".tag Hi",
  "filename": __filename
};
cmd(_0x446ca7, async (_0xb2d1ca, _0x26e406, _0x1fe36e, {
  from: _0x48c3b8,
  l: _0x33ce03,
  quoted: _0x13d52e,
  body: _0x298a5b,
  isCmd: _0x2b91c0,
  command: _0xe35736,
  mentionByTag: _0x7ad100,
  args: _0x18c434,
  q: _0x1be236,
  isGroup: _0x31bc0b,
  sender: _0x28ca24,
  senderNumber: _0x1a9dd6,
  botNumber2: _0x583e95,
  botNumber: _0x2aa89e,
  pushname: _0x237aa6,
  isMe: _0x26c405,
  isOwner: _0x114432,
  groupMetadata: _0xf9c904,
  groupName: _0x17e4d5,
  participants: _0x5ae5ac,
  groupAdmins: _0x718ee3,
  isBotAdmins: _0x1ddf62,
  isCreator: _0x8ed2b,
  isDev: _0x9e4c10,
  isAdmins: _0x32ac67,
  reply: _0x4b3c82
}) => {
  try {
    if (!_0x1fe36e.quoted) {
      return _0x4b3c82("*Please mention a message* ℹ️");
    }
    if (!_0x1be236) {
      return _0x4b3c82("*Please add a Group Jid* ℹ️");
    }
    let _0x2298f1 = '' + _0x1fe36e.quoted.msg;
    const _0x1a15a4 = {
      quoted: _0x26e406
    };
    _0xb2d1ca.sendMessage(_0x1be236, {
      'text': _0x2298f1,
      'mentions': _0x5ae5ac.map(_0x8aac9 => _0x8aac9.id)
    }, _0x1a15a4);
  } catch (_0x438f31) {
    const _0x3e865b = {
      "text": '❌',
      "key": _0x26e406.key
    };
    const _0x1204ec = {
      "react": _0x3e865b
    };
    await _0xb2d1ca.sendMessage(_0x48c3b8, _0x1204ec);
    console.log(_0x438f31);
    _0x4b3c82("❌ *Error Accurated !!*\n\n" + _0x438f31);
  }
});
const _0x4c04aa = {
  pattern: "ginfo",
  react: '🥏',
  "alias": ["groupinfo"],
  "desc": "Get group informations.",
  category: 'group',
  use: ".ginfo",
  "filename": __filename
};
cmd(_0x4c04aa, async (_0x549d77, _0x7db638, _0x55a368, {
  from: _0x522091,
  l: _0x243155,
  quoted: _0x58bcdd,
  body: _0x4ec107,
  isCmd: _0x5c3cc1,
  command: _0xd8b3ee,
  args: _0xe69fe4,
  q: _0x46e09c,
  isGroup: _0xc2faac,
  sender: _0x1ae174,
  senderNumber: _0x533479,
  botNumber2: _0x551c23,
  botNumber: _0x1b700f,
  pushname: _0x1646bb,
  isMe: _0x5ca086,
  isOwner: _0x2c6b0f,
  groupMetadata: _0x4f2b9b,
  groupName: _0x577a56,
  participants: _0x35bedf,
  groupAdmins: _0x109785,
  isBotAdmins: _0x3a70db,
  isCreator: _0xa323c2,
  isDev: _0x460ec0,
  isAdmins: _0x489710,
  reply: _0x4445db
}) => {
  try {
    const _0x15dacf = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0xc2faac) {
      return _0x4445db(_0x15dacf.only_gp);
    }
    if (!_0x489710) {
      const _0x5dc6e = {
        'quoted': _0x7db638
      };
      if (!_0x460ec0) {
        _0x4445db(_0x15dacf.you_adm);
        return _0x5dc6e;
      }
    }
    if (!_0x3a70db) {
      return _0x4445db(_0x15dacf.give_adm);
    }
    const _0x5b8728 = await _0x549d77.groupMetadata(_0x522091);
    let _0x3d7bad = await _0x549d77.profilePictureUrl(_0x522091, 'image');
    const _0x348767 = "\n*" + _0x5b8728.subject + "*\n\n🐉 *Group Jid* - " + _0x5b8728.id + "\n\n📬 *Participant Count* - " + _0x5b8728.size + "\n\n👤 *Group Creator* - " + _0x5b8728.owner + "\n\n📃 *Group Description* - " + _0x5b8728.desc + "\n\n";
    const _0x30d9db = {
      url: _0x3d7bad
    };
    const _0x4986c1 = {
      "quoted": _0x7db638
    };
    await _0x549d77.sendMessage(_0x522091, {
      'image': _0x30d9db,
      'caption': _0x348767 + config.FOOTER
    }, _0x4986c1);
  } catch (_0x1e118d) {
    const _0x4d6757 = {
      "text": '❌',
      "key": _0x7db638.key
    };
    const _0x2a549a = {
      "react": _0x4d6757
    };
    await _0x549d77.sendMessage(_0x522091, _0x2a549a);
    console.log(_0x1e118d);
    _0x4445db("❌ *Error Accurated !!*\n\n" + _0x1e118d);
  }
});