
class Character {
    constructor(name, description,health =150,hunger=150,sanity =200, locked = false) {
      this.name = name;
      this.health = health
      this.hunger = hunger
      this.sanity = sanity
      this.headImg = `.src/assets/heads/${name}`;
      this.previewImg = `.src/assets/previews/${name}`;
      this.description = description;
      this.locked = locked
    }
  }

const wilson = new Character('Wilson','just a regular guy',)
const willow = new Character('Willow','not crazy about the winter',150,150,120)
const wolfgang = new Character('Wolfgang','normally a strongman',)
const wendy = new Character('Wendy','her sister is a ghost',)
const wx78 = new Character('WX-78', 'lightning is his drug of choice',150,150,150)
const wickerbottom = new Character ('Wickerbottom', 'the funky librarian',125,150,250,true);
const maxwell = new Character('Maxwell', 'dapper, but frail',75,150,200);
const wigfrid = new Character('Wigfrid', 'a carnivorous viking',200,120,120);
const webber = new Character('Webber',"the piggies hate this guy",175,175,100)
const winona = new Character('Winona',"a skilled builder",)
const wormwood = new Character('Wormwood',"has something of a green thumb",150,150,200,true)

const characters = [wilson,willow,winona,wolfgang,wendy,wx78,wigfrid,webber,maxwell,wickerbottom,wormwood]

export default characters;
