# Best Practices in Software Engineering

This is a hands-on workshop on good practices in software engineering.
We're going to have a look at test-driven development (TDD), unit testing, refactoring and CI/CD.

The workshop is based on a popular refactoring exercise you can find out more about [here](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main).

## Setup

We recommend using [Intellij](https://www.jetbrains.com/idea/download/) as the IDE, but vscode is also great for this.

You might also have to install [python](https://www.python.org/downloads/windows/) if you are running on Windows.

You don't need to run this in a virtual machine.

To install the dependencies, run:

```console
# Locally in your project.
pip3 install -r requirements.txt
```

Suggestion: create a python virtual environment for this project. See the [documentation](https://docs.python.org/3/library/venv.html)

## Getting started

**First, fork this repository and clone it on your device.**

Then, install dependencies:

```console
pip3 install -r requirements.txt
```

## Run the unit tests from the Command-Line

We are using [Pytest](https://docs.pytest.org/en/stable/) as the testing framework

```
pytest
```

To run test with coverage

```
pytest --cov=gilded_rose
```

You can also use the python test windows from vscode (you must have the [python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) extension installed)

## Running the App

You can run the application seeing how the `update_quality()` function works:

```console
python3 texttest_fixture.py
```

Or with the number of days as args:

```console
python3 texttest_fixture.py 10
```

## Gilded Rose Requirements Specification

Hi and welcome to team Gilded Rose.
As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison.
We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in `Quality` as they approach their sell by date.

We have a system in place that updates our inventory for us.
It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures.
Your task is to add the new feature to our system so that we can begin selling a new category of items.
First an introduction to our system:

- All `items` have a `SellIn` value which denotes the number of days we have to sell the `items`.
- All `items` have a `Quality` value which denotes how valuable the item is.
- At the end of each day our system lowers both values for every item.

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, `Quality` degrades twice as fast.
- The `Quality` of an item is never negative.
- __"Aged Brie"__ actually increases in `Quality` the older it gets.
- The `Quality` of an item is never more than `50`.
- __"Sulfuras"__, being a legendary item, never has to be sold or decreases in `Quality`.
- __"Backstage passes"__, like aged brie, increases in `Quality` as its `SellIn` value approaches:
  - `Quality` increases by `2` when there are `10` days or less and by `3` when there are `5` days or less but
  - `Quality` drops to `0` after the concert

We have recently signed a supplier of conjured items.
This requires an update to our system:

- __"Conjured"__ items degrade in `Quality` twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything still works correctly.
However, do not alter the `Item` class or `Items` property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the `UpdateQuality` method and `Items` property static if you like, we'll cover for you).

Just for clarification, an item can never have its `Quality` increase above `50`, however __"Sulfuras"__ is a legendary item and as such its `Quality` is `80` and it never alters.
