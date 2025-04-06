import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('const name', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('foo');
    });

    it('quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

    it('quality drops by 2 after expiration', () => {
      const gildedRose = new GildedRose([new Item('Sword', 0, 3)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(1);
    })

    it('quality is never negative', () => {
      const gildedRose = new GildedRose([new Item('Sword', 0, 1)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    })

    it('brie increases in value', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(2);
    })

    it('quality is never greater than 50', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(50);
    })

    it('Sulfuras never decreases in quality', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 2)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(2);
    })

    it('ticket value increases by 1', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 7, 2)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(4);
    })

    it('ticket value increases by 2', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 2)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(5);
    })

    it('ticket value drops to 0', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(0);
    })

    it('conjured items degrade quickly', () => {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(3);
    })
});
