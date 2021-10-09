exports.menu = (ucapanWaktu,pushname,emror,prefix,wib,wita,wit,Tanggal) => {
  let p = 0
  return `𝗭𝗞 𝗕𝗔𝗦𝗕𝗬𝗖 𝗕𝗢𝗧
  
${ucapanWaktu} ${pushname}👋

Total Error : ${emror.length}

 Wib     : ${wib}
 Wita    : ${wita}
 Wit     : ${wit}
 Tanggal : ${Tanggal}
 
 
 ------- COMMAND -------
 
𝗢𝘄𝗻𝗲𝗿

   => ${prefix}mode
   => ${prefix}self
   => ${prefix}public
   => ${prefix}setprefix
   => ${prefix}shutdown
   => ${prefix}adderror
   => ${prefix}addprem
   => ${prefix}dellerror
   => ${prefix}delprem
   => ${prefix}banchat
   => ${prefix}unbanchat
   => x
   => >
   => $
   
𝗖𝗼𝗻𝘃𝗲𝗿𝘁
   
   => ${prefix}sticker
   => ${prefix}stickwm 
   => ${prefix}take
   => ${prefix}colong
   => ${prefix}emoji
   => ${prefix}toimg
   
𝗢𝘁𝗵𝗲𝗿𝘀
   
   => ${prefix}sc
   => ${prefix}menu
   => ${prefix}exif
   => ${prefix}listerror
   => ${prefix}listprem
   => ${prefix}cekpremium
   => ${prefix}hidetag
   => ${prefix}owner
   => ${prefix}resend
   => ${prefix}speed
   => ${prefix}runtime
   => ${prefix}nyanyi
   => ${prefix}q
   => ${prefix}listgroup
   => ${prefix}getlink
   => ${prefix}delete

𝗚𝗿𝗼𝘂𝗽

   => ${prefix}inspect
   => ${prefix}tagall
   => ${prefix}linkgroup
   => ${prefix}revoke
   => ${prefix}leave
   => ${prefix}join
   => ${prefix}group
   => ${prefix}antilink
   => ${prefix}viewonce
   => ${prefix}welcome
   => ${prefix}setwelcome
   => ${prefix}cekwelcome
   => ${prefix}delwelcome
   => ${prefix}left
   => ${prefix}setleft
   => ${prefix}cekleft
   => ${prefix}delleft

𝗣𝗿𝗲𝗺𝗶𝘂𝗺

   => ${prefix}play
   => ${prefix}joox
   => ${prefix}tiktok
   => ${prefix}ig
   => ${prefix}ytsearch
   => ${prefix}getmusic
   => ${prefix}getvideo
︎`
}