import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toBe("foo");
  });

  it("Sulfuras quality is 80 and it never alters", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(80);
  });

  it("Sulfuras SellIn date never alters", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 8, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(8);
  });

  it("SellIn date for items except Sulfuras decreases by 1", () => {
    // Arrange
    const gildedRose = new GildedRose([
      new Item("Sword", 0, 80),
      new Item("Aged Brie", 4, 3),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5),
    ]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(-1);
    expect(items[1].sellIn).toBe(3);
    expect(items[2].sellIn).toBe(4);
  });

  it("sword quality drops by 1", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("Sword", 1, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie quality increases", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 0)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(1);
  });

  it("Backstage Pass quality increases by 2 when there are 10 days or less", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 5),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(7);
    expect(items[1].quality).toBe(7);
  });

  it("Backstage Pass quality increases by 3 when there are 5 days or less", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 5),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[1].quality).toBe(8);
  });

  it("Backstage Pass item quality drops to 0 after the concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("quality is never negative", () => {
    const gildedRose = new GildedRose([
      new Item("Sword", 1, 0),
      new Item("Conjured Mana Cake", -3, 0),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(0);
  });

  it("Aged Brie quality and Backstage Pass quality are never more than 50", () => {
    const gildedRose = new GildedRose([
      new Item("Aged Brie", 1, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[1].quality).toBe(50);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast.", () => {
    const gildedRose = new GildedRose([
      new Item("Aged Brie", -2, 6),
      new Item("Sword", 0, 2),
      new Item("Sword", 0, 3),
      new Item("Sword", -1, 1),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[1].quality).toBe(0);
    expect(items[2].quality).toBe(1);
    expect(items[3].quality).toBe(0);
  });

  it('"Conjured" items degrade in Quality twice as fast as normal items.', () => {
    const gildedRose = new GildedRose([
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Conjured Mana Cake", 0, 4),
      new Item("Conjured Mana Cake", -3, 3),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
    expect(items[1].sellIn).toBe(-1);
    expect(items[1].quality).toBe(0);
    expect(items[2].sellIn).toBe(-4);
    expect(items[2].quality).toBe(0);
  });
});
