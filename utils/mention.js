/**
 * Create mention list
 *
 * This is Premium feature, Check premium feature at https://trakteer.id/red-emperor/showcase or chat Author for Information.
 *
 * @param  {String} id - sender id
 * @param  {String} botNumber - bot number
 * @param  {Array} list - group members
 * @return {Array} Return processed array
 */
module.exports = mentionList = (id, botNumber, list) => {
    let mentionlist = ''
    list.map((x) => {
        if ((x !== id) && (x !== botNumber)) mentionlist += `@${x.replace('@c.us', '')} `
    })
    return mentionlist
}

// Script untuk file index.js

if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup! [Group Only]', id)
if (!isGroupAdmins) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup! [Admin Group Only]', id)
const mentions = mentionList(sender.id, botNumber, groupMembers)
await client.sendTextWithMentions(from, `Heyy, ${pushname} is calling you !!!\n${mentions}`)
