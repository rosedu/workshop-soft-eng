// import { Item, GildedRose } from '@/gilded-rose';
import { Item, GildedRose } from '@/gilded-rose-corrected';
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
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('Sulfuras, Hand of Ragnaros stays the same', () => {
      const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)])
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(80);
    })   
    
    it('backstage passes older than 10 days', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)])
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(21);
    })

    it('backstage passes old at most 10 days but more than 5 days', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 45)])
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(47);
    })

    it('backstage passes less than 5 days', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)])
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(50);
    })

    it('backstage passes after concert', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49)])
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('Aged Brie value', () => {
      const gildedRose = new GildedRose([new Item("Wooden Axe", -1, 10)])
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(8);
    })

    it('Return Items', () => {
      const ItemArray = [new Item("Aged brie", -1, 51)]
      const gildedRose = new GildedRose(ItemArray)
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(49)
    })
});
