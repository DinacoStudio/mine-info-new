import MineInfo from './index.js'

const Mine = new MineInfo(true, true, true);
Mine.getInfo("MC.Hypixel.net").then(e => console.dir(e));