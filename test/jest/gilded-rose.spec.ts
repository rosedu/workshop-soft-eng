import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('foo');
    });

    it('sword quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })


    it('Aged Brie should not go past 50', () => {


        const gildedRose = new GildedRose([new Item('Aged Brie', 4, 49)])

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(50);

    })

    it('Sulfuras never decreases in quality' , () => {

        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 12, 80)])

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(80);

    })

    it('Backstage passes go to 0 after concert', () => {

        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)])

        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);


    })

    it('Quality should not go below 0', () => {

      const gildedRose = new GildedRose([new Item("Tricoul lu Vlad", 29, 0)])

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    })

    it('Quality decreases twice as fast', () => {

      const gildedRose = new GildedRose([new Item("Mustar de tecuci", -5, 7)])

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(5);

    })

    it('Pass increases in quality twice as fast with 10 days left', () => {

        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 25)])

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(27);

    })

    it('Pass increases in quality three times as fast with 5 days left', () => {

        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 25)])

        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(28);

    })

    it('Sellin and quality are updaded', () => {

        const gildedRose = new GildedRose([new Item("Camasa hawaiana a lu Claudiu", 4, 8)])

        const items = gildedRose.updateQuality()
        expect(items[0].sellIn).toBe(3)
        expect(items[0].quality).toBe(7);
    })

    it('Sulfuras never sold', () => {
        const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 80)])

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(5);
    })

    it('Conjured degrades twice as fast every day', () => {
        const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 5, 20)])

        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(18);

    })
});
