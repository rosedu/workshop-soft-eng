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

    it('Confit de Canard quality drops by 1', () => {
          // Arrange
          const confitDeCanard = new GildedRose([new Item('Confit de Canard', 100, 10)]);

          // Act
          const items = confitDeCanard.updateQuality();

          // Assert
          expect(items[0].quality).toBe(9);
        })

    it('Confit de Canard remains 0', () => {
              // Arrange
              const confitDeCanard = new GildedRose([new Item('Confit de Canard', 100, 0)]);

              // Act
              const items = confitDeCanard.updateQuality();

              // Assert
              expect(items[0].quality).toBe(0);
            })

    it('Aged Brie quality increases by 1', () => {
          const agedBrie = new GildedRose([new Item('Aged Brie', 70, 1)]);

          const items = agedBrie.updateQuality();

          expect(items[0].quality).toBe(2);
    })

    it('Aged Brie quality increases by 2 and sword quality decreases by 2', () => {
          const objects = new GildedRose([new Item('Aged Brie', 70, 1), new Item('Sword', 80, 6)]);

          let items;
          for (let i = 0; i < 2; i++) {
            items = objects.updateQuality();
          }


           expect(items[0].quality).toBe(3);
           expect(items[1].quality).toBe(4);
    })

    it('Aged Brie quality caps at 50', () => {
      const agedBrie = new GildedRose([new Item('Aged Brie', 70, 1)]);

      let items;

      for (let i = 0; i < 100; i++) {
        items = agedBrie.updateQuality();
        }

      expect(items[0].quality).toBe(50);
    })

    it('Sulfuras value remains 80', () => {
        const sulfuras = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 70, 80)]);

        let items;

        for (let i = 0; i < 100; i++) {
          items = sulfuras.updateQuality();
        }

        expect(items[0].quality).toBe(80);
    })

    it('Backstage passes evolution', () => {
      const backstagePasses = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 30, 0)]);

      let items;

      for (let i = 0; i < 20; i++) {
        items = backstagePasses.updateQuality();
        }

      expect(items[0].quality).toBe(20);

      for (let i = 0; i < 5; i++) {
        items = backstagePasses.updateQuality();
        }

      expect(items[0].quality).toBe(30);

      for (let i = 0; i < 5; i++) {
        items = backstagePasses.updateQuality();
        }

      expect(items[0].quality).toBe(45);

      for (let i = 0; i < 5; i++) {
        items = backstagePasses.updateQuality();
        }

      expect(items[0].quality).toBe(0);
      })
});
