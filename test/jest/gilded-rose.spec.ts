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
    });

    it('backstage passes, 10 days left', () => {

      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(2);
    });

    it('Aged Brie increase', () => {

      const gildedRose = new GildedRose([new Item('Aged Brie', 2, 5)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(6);

    });

    it('Aged Brie increase, quality = 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });

    it('Sulfuras, Hand of Ragnaros, const quality check', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 20, 32)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(32);

    });

    it('Quality after concert', () => {
      const gildedRose  = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });

    it('Aged Brie after deadline', () => {
      const gildedRose  = new GildedRose([new Item("Aged Brie", 0, 5)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(7);
    });

    it('Quality after deadline default', () => {
      const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", -1, 7)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(5);
    })
});
