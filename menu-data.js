// Happy Box menu content — names, descriptions, prices, images.
// Edit this file to change what's on the menu. index.html reads this
// data and builds the page and nav from it; you should not need to
// touch index.html or style.css just to change a price or add an item.
//
// Each section has:
//   id        — used for the page anchor (#id) and nav link
//   number    — the "01", "02"... shown in the section eyebrow
//   title     — heading shown in the section and (unless navLabel is
//               set) in the top nav
//   navLabel  — optional shorter label for the top nav
//   subtitle  — the one-line description under the heading
//   blocks    — the content, in order. Each block is one of:
//
//     { type: 'row-list', items: [...] }
//       A vertical list. Each item can have a photo, or set
//       noPhoto: true to show just name/description/price.
//
//     { type: 'tile-grid', items: [...], extraClass: '...' }
//       A photo grid (2 columns on mobile). extraClass is optional
//       (e.g. 'tile-grid--cheesecake' widens it on larger screens).
//       Every item needs a photo. Items may set `eyebrow` for a small
//       label above the name (used by the cheesecake flavours).
//
//     { type: 'gallery-scroll', items: [...] }
//       A horizontal-scrolling photo row on mobile, grid on desktop.
//       Every item needs a photo. Used by Sandwiches and Croissants.
//
//     { type: 'tier-list', items: [...], cols2: true }
//       A dotted-leader price list, never has photos. cols2 splits it
//       into two columns on larger screens.
//
//     { type: 'feature', item: {...} }
//       One large hero item (used once, for HB Frappe). item needs a
//       `kicker` (small label above the name) in addition to the
//       usual name/desc/price/image.
//
//     { type: 'heading', text: '...' }
//       A small standalone sub-heading inside a section (used for
//       "Gift Boxes" inside Desserts).
//
// Item fields:
//   name    — shown as the item title
//   desc    — one-line description
//   price   — shown exactly as typed, e.g. "AED 22"
//   image   — filename inside images/, e.g. "espresso.jpg" (omit or
//             set noPhoto: true for a no-photo row-list item)
//   alt     — optional image alt text; defaults to `name` if omitted
//   eager   — optional; set true only for photos visible immediately
//             on page load (used for the first couple of items)

const MENU_DATA = [

  {
    id: 'coffee-plus',
    number: '01',
    title: 'Coffee +',
    subtitle: 'Espresso-based classics, brewed to order.',
    blocks: [
      {
        type: 'row-list',
        items: [
          { name: 'Espresso', desc: 'Rich, concentrated shot of premium coffee.', price: 'AED 22', image: 'espresso.jpg', eager: true },
          { name: 'Americano', desc: 'Espresso topped with hot water for a smooth finish.', price: 'AED 22', image: 'americano.jpg', eager: true },
          { name: 'Flatwhite', desc: 'Velvety steamed milk with a double espresso.', price: 'AED 24', image: 'flatwhite.jpg' },
          { name: 'Café Latte', desc: 'Espresso with creamy steamed milk.', price: 'AED 21', image: 'cafe-latte.jpg' },
          { name: 'Cappuccino', desc: 'Espresso with steamed milk and thick foam.', price: 'AED 24', image: 'cappuccino.jpg' },
          { name: 'Cortado', desc: 'Equal parts espresso and steamed milk.', price: 'AED 22', image: 'cortado.jpg' },
          { name: 'Piccolo', desc: 'Small latte with a bold espresso flavour.', price: 'AED 22', image: 'piccolo.jpg' },
          { name: 'Espresso Machiato', desc: 'Espresso marked with a touch of milk foam.', price: 'AED 22', image: 'espresso-machiato.jpg' },
          { name: 'V60', desc: 'Hand-brewed filter coffee with clean, delicate notes.', price: 'AED 35', image: 'v60.jpg' },
          { name: 'Affogato', desc: 'Espresso poured over creamy vanilla ice cream.', price: 'AED 30', noPhoto: true },
        ],
      },
    ],
  },

  {
    id: 'signature',
    number: '02',
    title: 'Signature Drinks',
    navLabel: 'Signature',
    subtitle: "Happy Box originals you won't find anywhere else.",
    blocks: [
      {
        type: 'feature',
        item: { kicker: 'The Signature', name: 'HB Frappe', desc: 'Signature iced blended coffee, smooth and refreshing.', price: 'AED 45', image: 'hb-frappe.jpg' },
      },
      {
        type: 'row-list',
        items: [
          { name: 'Spanish Latte', desc: 'Sweet, creamy latte made with white chocolate.', price: 'AED 30', image: 'spanish-latte.jpg' },
          { name: 'Mocha Latte', desc: 'Espresso with chocolate and steamed milk.', price: 'AED 30', image: 'mocha-latte.jpg' },
          { name: 'Hot / Iced Chocolate', desc: 'Rich premium chocolate served hot or cold.', price: 'AED 30', image: 'hot-iced-chocolate.jpg' },
          { name: 'Salted Caramel', desc: 'Espresso blended with rich salted caramel.', price: 'AED 30', noPhoto: true },
        ],
      },
    ],
  },

  {
    id: 'matcha',
    number: '03',
    title: 'Matcha Drinks',
    navLabel: 'Matcha',
    subtitle: 'Stone-ground Japanese matcha, whisked to order.',
    blocks: [
      {
        type: 'tile-grid',
        items: [
          { name: 'Classic Matcha', desc: 'Premium Japanese matcha with milk.', price: 'AED 35', image: 'classic-matcha.jpg' },
          { name: 'Cloud Matcha', desc: 'Creamy matcha topped with a light foam.', price: 'AED 40', image: 'cloud-matcha.jpg' },
        ],
      },
      {
        type: 'row-list',
        items: [
          { name: 'Salted Caramel Matcha', desc: 'Matcha with sweet salted caramel.', price: 'AED 35', noPhoto: true },
          { name: 'Strawberry Matcha', desc: 'Matcha layered with fresh strawberry flavour.', price: 'AED 35', noPhoto: true },
        ],
      },
    ],
  },

  {
    id: 'acai',
    number: '04',
    title: 'Açaí',
    subtitle: 'Blended fresh, topped generously.',
    blocks: [
      {
        type: 'tile-grid',
        items: [
          { name: 'Açaí Smoothie', desc: 'Refreshing açaí blended with mixed fruits.', price: 'AED 40', image: 'acai-smoothie.jpg' },
          { name: 'Açaí Bowl', desc: 'Açaí topped with fresh fruits and crunchy granola.', price: 'AED 40', image: 'acai-bowl.jpg' },
        ],
      },
      {
        type: 'row-list',
        items: [
          { name: 'Açaí with Protein Smoothie', desc: 'Açaí smoothie boosted with protein.', price: 'AED 47', noPhoto: true },
        ],
      },
    ],
  },

  {
    id: 'sandwiches',
    number: '05',
    title: 'Sandwiches',
    subtitle: 'Made fresh on soft daily bread.',
    blocks: [
      {
        type: 'gallery-scroll',
        items: [
          { name: 'Turkey & Cheese w/ Cranberry Sauce', desc: 'Turkey, cheese, and sweet cranberry sauce.', price: 'AED 40', image: 'turkey-cranberry.jpg' },
          { name: 'Roasted Beef', desc: 'Slow-roasted beef with fresh greens.', price: 'AED 40', image: 'roasted-beef.jpg' },
          { name: 'Roasted Chicken', desc: 'Tender roasted chicken with fresh vegetables.', price: 'AED 40', image: 'roasted-chicken.jpg' },
          { name: 'Tuna w/ Avocado', desc: 'Creamy tuna paired with fresh avocado.', price: 'AED 40', image: 'tuna-avocado.jpg' },
        ],
      },
    ],
  },

  {
    id: 'croissants',
    number: '06',
    title: 'Croissants',
    subtitle: 'Baked in-house, every morning.',
    blocks: [
      {
        type: 'gallery-scroll',
        items: [
          { name: 'Plain', desc: 'Buttery, flaky French pastry baked fresh daily.', price: 'AED 19', image: 'plain-croissant.jpg', alt: 'Plain Croissant' },
          { name: 'Cheese', desc: 'Flaky butter croissant filled with creamy, savory cheese.', price: 'AED 22', image: 'cheese-croissant.jpg', alt: 'Cheese Croissant' },
          { name: 'Almond', desc: 'Flaky croissant topped with toasted almond flakes.', price: 'AED 22', image: 'almond-croissant.jpg', alt: 'Almond Croissant' },
          { name: 'Nutella', desc: 'Buttery croissant dipped in rich Nutella chocolate.', price: 'AED 22', image: 'nutella-croissant.jpg', alt: 'Nutella Croissant' },
        ],
      },
    ],
  },

  {
    id: 'cheesecake',
    number: '07',
    title: "Nani's Cheesecake",
    navLabel: 'Cheesecake',
    subtitle: 'Ten flavors, one classic New York base — a world tour in every slice.',
    blocks: [
      {
        type: 'tile-grid',
        extraClass: 'tile-grid--cheesecake',
        items: [
          { name: 'Bueno', eyebrow: 'Buenos Aires', desc: 'Milk chocolate, assorted chocolate balls & Kinder Bueno.', price: 'AED 42', image: 'bueno-buenos-aires.jpg', alt: 'Bueno - Buenos Aires cheesecake' },
          { name: 'Bueno White', eyebrow: 'Barcelona', desc: 'Kinder Bueno spread, chocolate balls & white Bueno pieces.', price: 'AED 42', image: 'bueno-white-barcelona.jpg', alt: 'Bueno White - Barcelona cheesecake' },
          { name: 'Kinder Choco Balls', eyebrow: 'Moscow', desc: 'Milk chocolate, colorful chocolate balls & Kinder pieces.', price: 'AED 42', image: 'kinder-choco-balls-moscow.jpg', alt: 'Kinder Choco Balls - Moscow cheesecake' },
          { name: 'Maxi King Toffifee', eyebrow: 'London', desc: 'Milk chocolate, Maxi King & Toffifee, caramel drizzle.', price: 'AED 42', image: 'maxi-king-toffifee-london.jpg', alt: 'Maxi King Toffifee - London cheesecake' },
          { name: 'Oreo', eyebrow: 'Dubai', desc: 'Milk chocolate, topped with crunchy Oreo pieces.', price: 'AED 42', image: 'oreo-dubai.jpg', alt: 'Oreo - Dubai cheesecake' },
          { name: 'Raffaello', eyebrow: 'Cologne', desc: 'White chocolate, Raffaello & a sprinkle of coconut.', price: 'AED 42', image: 'raffaello-cologne.jpg', alt: 'Raffaello - Cologne cheesecake' },
          { name: 'Strawberry Pistachio', eyebrow: 'Milano', desc: 'White chocolate, strawberries, blueberries & pistachio sauce.', price: 'AED 42', image: 'strawberry-pistachio.jpg', alt: 'Strawberry Pistachio cheesecake' },
          { name: 'Lotus', eyebrow: 'Las Vegas', desc: 'Rich Lotus cream & crunchy Biscoff biscuits.', price: 'AED 42', image: 'lotus-las-vegas.jpg', alt: 'Lotus - Las Vegas cheesecake' },
          { name: 'Rocher Ferrero', eyebrow: 'Paris', desc: 'Milk chocolate, Ferrero Rocher & crushed nuts.', price: 'AED 42', image: 'rocher-ferrero-paris.jpg', alt: 'Rocher Ferrero - Paris cheesecake' },
          { name: 'Strawberry', eyebrow: 'Istanbul', desc: 'Strawberry cream, topped with fresh strawberries.', price: 'AED 42', image: 'strawberry-istanbul.jpg', alt: 'Strawberry - Istanbul cheesecake' },
        ],
      },
    ],
  },

  {
    id: 'desserts',
    number: '08',
    title: 'Desserts',
    subtitle: 'Fresh strawberries, hand-dipped in chocolate.',
    blocks: [
      {
        type: 'tile-grid',
        items: [
          { name: 'Strawberry in Cup', desc: 'Fresh strawberries coated with premium chocolate.', price: 'AED 35', image: 'strawberry-cup.jpg' },
          { name: 'Strawberry Chocolate (1 Pc)', desc: 'One chocolate-dipped fresh strawberry.', price: 'AED 15', image: 'strawberry-piece.jpg' },
        ],
      },
      { type: 'heading', text: 'Gift Boxes' },
      {
        type: 'tier-list',
        items: [
          { name: 'Strawberry in Box — 5 pcs', desc: 'Five chocolate-covered strawberries.', price: 'AED 79' },
          { name: 'Strawberry in Box — 12 pcs', desc: 'Twelve chocolate-covered strawberries.', price: 'AED 159' },
          { name: 'Strawberry in Box — 20 pcs', desc: 'Twenty chocolate-covered strawberries.', price: 'AED 249' },
          { name: 'Strawberry in Box — 50 pcs', desc: 'Fifty chocolate-covered strawberries.', price: 'AED 499' },
        ],
      },
    ],
  },

  {
    id: 'cookies',
    number: '09',
    title: 'Cookies',
    subtitle: 'Baked fresh, loaded with mix-ins.',
    blocks: [
      {
        type: 'tile-grid',
        items: [
          { name: 'Triple Chocolate', desc: 'Milk, dark & white chocolate baked into every bite.', price: 'AED 20', image: 'triple-chocolate-cookie.jpg', alt: 'Triple Chocolate cookie' },
          { name: 'Nutella Sea Salt', desc: 'Rich Nutella swirl finished with a touch of sea salt.', price: 'AED 20', image: 'nutella-sea-salt-cookie.jpg', alt: 'Nutella Sea Salt cookie' },
          { name: 'Peanut Butter', desc: 'Chewy peanut butter cookie topped with crushed almonds.', price: 'AED 20', image: 'peanut-butter-cookie.jpg', alt: 'Peanut Butter cookie' },
        ],
      },
    ],
  },

  {
    id: 'cookie-sundaes',
    number: '10',
    title: 'Cookie Sundaes',
    subtitle: 'Warm cookies, vanilla ice cream, piled high.',
    blocks: [
      {
        type: 'tile-grid',
        items: [
          { name: 'Happy Choco Crunch', desc: 'Triple chocolate cookies, vanilla ice cream, milk & white chocolate sauce topped with crunchy candy pearls.', price: 'AED 35', image: 'happy-choco-crunch-sundae.jpg', alt: 'Happy Choco Crunch sundae' },
          { name: 'Salted Nutella Bliss', desc: 'Nutella sea salt cookie, vanilla ice cream & Nutella sauce topped with sea salt.', price: 'AED 35', image: 'salted-nutella-bliss-sundae.jpg', alt: 'Salted Nutella Bliss sundae' },
          { name: 'Peanut Butter Crunchy', desc: 'Peanut butter cookies, vanilla ice cream & peanut butter sauce topped with crushed almonds.', price: 'AED 35', image: 'peanut-butter-crunchy-sundae.jpg', alt: 'Peanut Butter Crunchy sundae' },
        ],
      },
    ],
  },

  {
    id: 'addons',
    number: '11',
    title: 'Add-ons',
    subtitle: 'Customize any drink or bowl.',
    blocks: [
      {
        type: 'tier-list',
        cols2: true,
        items: [
          { name: 'Extra Shot', desc: 'Add an extra espresso shot.', price: 'AED 5' },
          { name: 'Alternative Milk', desc: 'Oat, almond & coconut plant-based.', price: 'AED 5' },
          { name: 'Fruits', desc: 'Banana, strawberry, blueberry, raspberry.', price: 'AED 5' },
          { name: 'Extra Peanut Butter', desc: 'Add a spoon of peanut butter.', price: 'AED 5' },
          { name: 'Extra Protein Powder', desc: 'Boost any drink with protein powder.', price: 'AED 7' },
          { name: 'Cranberry Sauce', desc: 'Add sweet cranberry sauce.', price: 'AED 5' },
        ],
      },
    ],
  },

];
