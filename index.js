var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "¡Unete!",
assets : {
large_image : "dev",
large_text : "Jugando en discord developer" 
},
buttons : [{label : "Server" , url : "https://discord.gg/bu985xWSPU"},{label : "Github",url : "https://github.com/Ryo069"}]
}
})
})
client.login({ clientId : "//client id" }).catch(console.error);