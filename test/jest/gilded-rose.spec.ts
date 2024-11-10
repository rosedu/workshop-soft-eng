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

    it('item quality degrades twice as fast after the sell date', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 2, 10)]);

      // Act
      let items: Item[] = [];
      for (let i = 0; i < 3; i++)
        items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(6);
    });

    it('item quality does not go below 0', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 2, 10)]);

      // Act
      let items: Item[] = [];
      for (let i = 0; i < 50; i++)
        items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    });

    it('aged brie quality increases by 1', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].quality).toBe(2);
    });

    it('item quality does not surpass 50', () => {
      // Arrange
      const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 1, 80), // should remain constant
        new Item('Sword', 3, 1), // should decrease to 0
        new Item('Aged Brie', 10, 1), // should increase to 50
      ]);

      // Act
      let items: Item[] = [];
      for (let i = 0; i < 50; i++)
        items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
      expect(items[1].quality).toBe(0);
      expect(items[2].quality).toBe(50);
    });

    it('sulfuras quality & sellin remain constant', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(1);
    });

    it('"backstage passes" quality behaves properly', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);

        // Act (one day passes)
        let items = gildedRose.updateQuality();

        // Assert (increase by 1)
        expect(items[0].quality).toBe(20 + 1);

        // Act (sellIn <= 10)
        for (let i = 14; i >= 10; i--)
            items = gildedRose.updateQuality();

        // Assert (increase by 2)
        expect(items[0].quality).toBe(20 + 5 * 1 + 2 * 1);

        // Act (sellIn <= 5)
        for (let i = 9; i >= 5; i--)
          items = gildedRose.updateQuality();

        // Assert (increase by 3)
        expect(items[0].quality).toBe(20 + 5 * 1 + 5 * 2 + 3 * 1);

        // Act (end is reached)
        for (let i = 4; i >= 0; i--)
          items = gildedRose.updateQuality();

        // Assert
        expect(items[0].quality).toBe(0);
    });

    it('conjured items degrade twice as fast in quality', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 2, 10)]);

      // Act
      const items: Item[] = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    });

});
