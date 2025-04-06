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

    it('the quality should increase with 2', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 7, 0)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(2);
      })

    it('the quality should increase with 1', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 13, 0)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(1);
     })


    it('the quality should be the same', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 51)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(51);
     })


    it('the sellIn should be negative an the quality drops with 1', () => {
        const gildedRose = new GildedRose([new Item('Hello', 0, 1)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(0);
        expect(items[0].sellIn).toBe(-1);

      })

    it('the sellIn should drop with 1 and the quality will be equal with 0', () => {
         const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 39)]);

         const items = gildedRose.updateQuality();

         expect(items[0].sellIn).toBe(-1);
         expect(items[0].quality).toBe(0);
      })

    it('the sellIn should drop with 1 and the quality will be increased with 2', () => {
         const gildedRose = new GildedRose([new Item('Aged Brie', 0, 39)]);

         const items = gildedRose.updateQuality();

         expect(items[0].sellIn).toBe(-1);
         expect(items[0].quality).toBe(41);
      })

    it('the sellIn should drop with 1 and the quality will be decreased with 2', () => {
         const gildedRose = new GildedRose([new Item('Hello', 0, 243)]);

         const items = gildedRose.updateQuality();

         expect(items[0].sellIn).toBe(-1);
         expect(items[0].quality).toBe(241);
      })

});
