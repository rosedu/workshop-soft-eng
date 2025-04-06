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

    it('quality degrades twice as fast after last sell in day', () => {
      const gildedRose = new GildedRose([new Item('Item', 0, 5)]);

      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(3);
    });

    it('aged brie quality increases by 1', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(11);
    });

    it('aged brie quality does not increase over 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });

    it('backstage passes quality increse by 2 when 10 days or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 5)]);

      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(7);
    });

    it('backstage passes quality increse by 3 when 5 days or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 5)]);

      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(8);
    });

    it('backstage passes quality drop to 0 after final day', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5)]);

      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(0);
    });

    it('sulfuras quality remains the same', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);

      const items = gildedRose.updateQuality(); 
      
      expect(items[0].quality).toBe(80);
    });

    it('sulfuras sell in days remain the same', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);

      const items = gildedRose.updateQuality(); 
      
      expect(items[0].sellIn).toBe(2);
    });

    it('conjured item quality drops twice as fast', () => {
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 4, 5)]);

      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(3);
    });

    it('conjured item quality drops twice as fast when sell in days are over', () => {
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 5)]);

      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(1);
    });
});
