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

    it('Sulfuras quality doesn\'t drop', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
    })

    it('Aged brie increases in Quality', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 30)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(31);
    })

    it('Item quality doesn\'t exceed 50/drop below 0', () => {
        const gildedRose1 = new GildedRose([new Item('Shield', 10, 0)]);
        const gildedRose2 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)]);

        const item1 = gildedRose1.updateQuality();
        const item2 = gildedRose2.updateQuality();

        expect(item1[0].quality).toBe(0);
        expect(item2[0].quality).toBe(50);
    })

    it('Conjured items degrade twice as fast', () => {
        const gildedRose = new GildedRose([new Item('Conjured', 5, 20)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(18);
    })
});
