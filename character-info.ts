export class Character {

    name: string;
    health: number;
    hunger: number;
    sanity: number;
    description: string;
    locked: boolean;

    constructor(name:string, description:string,health = 150,hunger=150,sanity =200, locked = false) {
      this.name = name;
      this.health = health
      this.hunger = hunger
      this.sanity = sanity
      // this.headImg = `./assets/heads/${name}.png`;
      // this.previewImg = `./assets/previews/${name}.png`;
      this.description = description;
      this.locked = locked
    }
  }

const wilson = new Character('Wilson','Just A Regular Guy',)
const willow = new Character('Willow',"Not Crazy About The Winter",150,150,120)
const wolfgang = new Character('Wolfgang','Normally A Strongman',)
const wendy = new Character('Wendy','Shares A Close Bond With Her Sister',)
const wx78 = new Character('WX-78', 'Lightning Is His Drug Of Choice',150,150,150)
const wickerbottom = new Character ('Wickerbottom', 'The Funky Librarian',125,150,250,true);
const maxwell = new Character('Maxwell', 'Dapper, but Frail',75,150,200);
const wigfrid = new Character('Wigfrid', 'Carnivorous Viking',200,120,120);
const webber = new Character('Webber',"The Piggies Hate This Guy",175,175,100)
const winona = new Character('Winona',"A Skilled Builder",)
const wormwood = new Character('Wormwood',"Known For His Green Thumb",150,150,200,true)

const characters: Character[] = [wilson,willow,winona,wolfgang,wendy,wx78,wigfrid,webber,maxwell,wickerbottom,wormwood]

export default characters;
