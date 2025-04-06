import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('bar', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('bar');
    });

    it('sword quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

    it('sword quality does not drop below 0', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    // sell by date passed decrese quality by 2
    it('sword quality drops by 2 when sellIn is negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', -1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })  

    // Aged Brie quality increases by 1 when sellIn is positive
    it('Aged Brie quality increases by 1 when sellIn is positive', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(21);
    }
    )

    it('Aged Brie quality does not exceed 50', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
    }
    );

    it('Backstage passes quality increases by 1 when sellIn is positive and more than 10 days', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(21);
    }
    );
    it('Backstage passes quality increases by 2 when sellIn is between 10 and 5 days', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(22);
    }
    );
    it('Backstage passes quality increases by 3 when sellIn is between 5 and 0 days', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(23);
    }
    );

    it('Backstage passes quality drops to 0 when sellIn is negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    }
    );

    it('Sulfuras quality does not change', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
    }
    );
    it('Sulfuras quality does not change when sellIn is negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
    }
    );

    it('quality of an item is never negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 0, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    }
    );

    it('conjured item quality decreases by 2 when sellIn is positive', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 1, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    }
    );

    it('Golden Sword quality decreases by 0.5 when sellIn is positive', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Golden Sword', 1, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(9.5);
    }
    );
    





});
