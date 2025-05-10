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

    it('sword sellin drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].sellIn).toBe(0);
    })

    it('sword sellIn can be negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 0, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].sellIn).toBe(-1);
    })

    it('Once the sell by date has passed, Quality degrades twice as fast', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 0, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    })

    it('The Quality of an item is never negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 0, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('"Aged Brie" actually increases in Quality the older it gets', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

    it('The Quality of an item is never more than 50', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
    })

    it('"Sulfuras", never has to be sold or decreases in Quality', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(5);
    })

    it('"Backstage passes", Quality increases by 2 when there are 10 days or less; ', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(12);
    })

    it('"Backstage passes", Quality increases by 3 when there are 5 days or less; ', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(13);
    })

    it('"Backstage passes", Quality drops to 0 after the concert; ', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    //teste pentru Conjured
    it('conjured degrade in quality twice as fast as normal items', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 1, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    })

    it('conjured degrade in quality twice as fast as normal items', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('conjured degrade in quality twice as fast as normal items', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -1, 5)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

    it('conjured degrade in quality twice as fast as normal items', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 48)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(49);
    })
});
