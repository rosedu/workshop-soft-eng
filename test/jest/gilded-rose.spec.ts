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

    it('aged brie and backstage pass grows in quality by 1 except if its >=50', () => {
      // Arrange
      const gildedRose = new GildedRose([
        new Item('Aged Brie', 2, 0), 
        new Item('Aged Brie', 1, 50),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
      ]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
      expect(items[1].quality).toBe(50);
      expect(items[2].quality).toBe(21);
      expect(items[3].quality).toBe(50);
    });

    it('sulfura doesnt lose quality', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
    })

    it('sellin days gets lowered, except if its sulfura', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80), new Item('Aged Brie', 2, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].sellIn).toBe(0);
      expect(items[1].sellIn).toBe(1);
    });

    it("backstage pass quality changes as sellIn days gets smaller", () => {
      // Arrange
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
      ]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(21);
      expect(items[1].quality).toBe(50);
      expect(items[2].quality).toBe(50);
      expect(items[3].quality).toBe(13);
    })

    it('quality decreases more if sellin days negative', () => {
      // Arrange
      const gildedRose = new GildedRose([
        new Item("Elixir of the Mongoose", -2, 7),
        new Item("Elixir of the Mongoose", -2, 0),
        new Item("Backstage passes to a TAFKAL80ETC concert", -3, 10),
        new Item('Aged Brie', -1, 50),
        new Item('Aged Brie', -2, 2),
      ]);

      // Act
      const items = gildedRose.updateQuality();

      //Assert
      expect(items[0].quality).toBe(5);
      expect(items[1].quality).toBe(0);
      expect(items[2].quality).toBe(0);
      expect(items[3].quality).toBe(50);
      expect(items[4].quality).toBe(4);
    });
});
