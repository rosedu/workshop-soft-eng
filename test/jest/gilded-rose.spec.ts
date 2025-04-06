import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("name doesn't change", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toBe("foo");
  });

  it("sword quality drops by 1", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("Sword", 1, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });

  it("quality doesn't decrease below 0", () => {
    const items = [new Item("Sword", 3, 1)];

    const gildedRose = new GildedRose(items);

    const nrDays = 3;
    for (let i = 0; i < nrDays; i++) {
      gildedRose.updateQuality();
    }

    expect(items[0].quality).toBe(0);
  });

  it("sellIn date passed, decrease quality twice as fast", () => {
    const items = [new Item("Sword", 3, 10)];

    const gildedRose = new GildedRose(items);

    const nrDays = 4;
    for (let i = 0; i < nrDays; i++) {
      gildedRose.updateQuality();
    }

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(5);
  });

  it("Sulfuras quality never decreases", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];

    const gildedRose = new GildedRose(items);

    const nrDays = 5;

    for (let i = 0; i < nrDays; i++) {
      gildedRose.updateQuality();
    }

    expect(items[0].quality).toBe(80);
  });

  it("Aged Brie quality increases", () => {
    const items = [new Item("Aged Brie", 5, 3)];

    const gildedRose = new GildedRose(items);

    const nrDays = 5;
    for (let i = 0; i < nrDays; i++) {
      gildedRose.updateQuality();
    }

    expect(items[0].quality).toBe(8);
  });

  it("Backstage passes quality increases", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 3),
    ];

    const gildedRose = new GildedRose(items);

    const nrDays = 7;
    for (let i = 0; i < nrDays; i++) {
      gildedRose.updateQuality();
    }

    expect(items[0].quality).toBe(17);
  });

  it("Backstage passes quality drops to zero when sellIn passes", () => {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 3, 3)];

    const gildedRose = new GildedRose(items);

    const nrDays = 4;
    for (let i = 0; i < nrDays; i++) {
      gildedRose.updateQuality();
    }

    expect(items[0].quality).toBe(0);
  });

  it("Item quality doesn't increase past 50", () => {
    const items = [
      new Item("Aged Brie", 3, 45),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 45),
    ];

    const gildedRose = new GildedRose(items);

    const nrDays = 10;
    for (let i = 0; i < nrDays; i++) {
      gildedRose.updateQuality();
    }

    expect(items[0].quality).toBe(50);
    expect(items[1].quality).toBe(50);
  });
});
