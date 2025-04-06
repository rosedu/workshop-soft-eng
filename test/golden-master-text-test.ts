import { Item, GildedRose } from '../app/gilded-rose';

const items = [
    // Other items - Normal
    new Item("+5 Dexterity Vest", 10, 20),                              // 0
    new Item("Aged Brie", 2, 0),                                        // 1
    new Item("Elixir of the Mongoose", 5, 7),                           // 2
    new Item("Griphon Wings", 5, 42),                                   // 3              
    new Item("Normal Item", 3, 6),                                      // 4    
    // Aged Brie
    new Item("Aged Brie", 2, 0),                                        // 5
    new Item("Aged Brie", 0, 0),                                        // 6      
    // Backstage passes
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),      // 9
    new Item("Backstage passes to a TAFKAL81ETC concert", 10, 49),      // 10
    new Item("Backstage passes to a TAFKAL82ETC concert", 5, 49),       // 11
    new Item("Backstage passes to a TAFKAL83ETC concert", 0, 5),        // 12
    // Conjured
    new Item("Conjured Mana Cake", 3, 6),                               // 13
    new Item("Conjured Mana Cake", 4, 7)                                // 14
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
}

for (let i = 0; i < days + 1; i++) {
    console.log("-------- day ".padStart(25) + i + " --------");
    console.log("name".padStart(24).padEnd(45) + "| sellIn |" + "quality");
    items.forEach(element => {
      console.log(
        element.name.padEnd(45) + '|' + 
        element.sellIn.toString().padStart(5).padEnd(8) + '|' + 
        element.quality.toString().padStart(4));
    });
    console.log();
    gildedRose.updateQuality();
}
