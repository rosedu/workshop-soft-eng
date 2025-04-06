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

  it('once the sell date has passed, the quality should degrade twice  as fast', () => {
    //Arrange
    const gildedRose = new GildedRose([new Item('Sword', -5, 3)]);

    //Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(1);
  })

  it('item quality should never be negative', () => {
    //Arange
    const gildedRose = new GildedRose([new Item('testItem', 1, 0)]);

    //Act
    const items = gildedRose.updateQuality();

    //Assert
    expect(items[0].quality).toBe(0);
  })

  it('Aged Brie increases in quality the older it gets', () => {
    //Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 10)]);

    //Act
    const items = gildedRose.updateQuality();

    //Assert
    expect(items[0].quality).toBe(11);

  })

  it('item quality should never be over 50', () => {
    //Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);

    //Act
    const items = gildedRose.updateQuality();

    //Assert
    expect(items[0].quality).toBe(50);

  })

  it('Sulfuras never has to be sold ', () => {
    //Arrange
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);

    //Act
    const items = gildedRose.updateQuality();

    //Assert
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(10);
  })

  for (let i = 10; i >= 6; --i)
  {
    it('Backstage passes incrases +2 in  quality when there are 10 days or less', () => {
      //Arrange
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", i, 10)]);

      //Act
      const items =  gildedRose.updateQuality();

      //Assert
      expect(items[0].quality).toBe(12);
    })
  }

  for (let i = 5; i > 0; --i)
  {
    it('Backstage passes incrases +3 in  quality when there are 5 days or less', () => {
      //Arrange
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", i, 10)]);

      //Act
      const items =  gildedRose.updateQuality();

      //Assert
      expect(items[0].quality).toBe(13);
    })
  }


});
