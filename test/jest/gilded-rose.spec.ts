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

    it('Quality never negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Bad item', 5, 0)]);

      // Act
      const items = gildedRose.updateQuality();
 
      // Assert
      expect(items[0].quality).toBe(0);
    });

    it('Backstage passes quality increase 2', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(7);
    });

    it('Backstage passes quality increase 3', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 5)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    });

    it('Aged Brie quality increase', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 5)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(6);
    });

    it('Age Brie quality increase doubles (sellin day passed)', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', -10, 50)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
    });

    it('Sellin day passed degrade double', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', -1, 5)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(3);
    });

    it('Sulfuras quality does not alter', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -10, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
    });

    it('Backstage passes sellin day passed quality drops to 0', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    });

    it('No item in', () => {
      // Arrange
      const gildedRose = new GildedRose([]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items).toStrictEqual([]);
    });
   
    it('Conjured items - System not updated', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured', 5, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(9);
    });

    it('Conjured items - System updated', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured', 5, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    });
});
