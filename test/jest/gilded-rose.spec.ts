import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should bar", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("bar", 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toBe("bar");
  });

  it("sword quality drops by 0", () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("Sword", 1, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });
});
