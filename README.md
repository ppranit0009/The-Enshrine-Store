# FIZZ React Application

A modern React-based e-commerce store for aesthetic gifts, personalised objects, and tiny pieces of technology.

## Features

- **Full-Screen Hero Slider**: Auto-playing carousel showcasing website updates and new products
- **Product Catalog**: Browse products by category (Lamps, OLED & Electronics, 3D Printed Decor)
- **Theme Switcher**: Toggle between HER and HIM content variants
- **Custom Orders**: Submit custom product enquiries via WhatsApp
- **Search**: Search products by name, category, or description
- **Customer Reviews**: Display customer reviews with product images and star ratings
- **Admin Panel**: Add, edit, and remove products (demo credentials: admin@gmail.com / 123admin)
- **Responsive Design**: Mobile-friendly layout with purple theme
- **Modular Components**: Every section separated into reusable components

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd fizz-react
```

2. Install dependencies:
```bash
npm install
```

3. Add your assets:
   - Place your logo image at `public/assets/logo.png`
   - Place product images in `public/assets/`:
     - `mascot-happy.png`
     - `mascot-gift.png`
     - `face-lamp.png`
     - `lamp-character.png`
     - `robot-sprue.png`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
fizz-react/
├── public/
│   └── assets/          # Place your images here
├── src/
│   ├── components/
│   │   ├── admin/       # Admin-specific components
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminTable.jsx
│   │   │   └── ProductForm.jsx
│   │   ├── modals/      # Modal components
│   │   │   ├── CustomForm.jsx
│   │   │   ├── ModalHeader.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── ProductImage.jsx
│   │   │   ├── SearchInput.jsx
│   │   │   └── SearchResults.jsx
│   │   ├── sections/    # Reusable section components
│   │   │   ├── AboutSection.jsx
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── CustomBanner.jsx
│   │   │   ├── FooterCopyright.jsx
│   │   │   ├── FooterLinks.jsx
│   │   │   ├── FooterLogo.jsx
│   │   │   ├── HeroContent.jsx
│   │   │   ├── HeroImage.jsx
│   │   │   ├── HeroSlider.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── NavLinks.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductSection.jsx
│   │   │   ├── ReviewCard.jsx
│   │   │   ├── ReviewsSection.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── CustomModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductModal.jsx
│   │   ├── SearchModal.jsx
│   │   └── Shop.jsx
│   ├── App.jsx          # Main application component
│   ├── data.js          # Product data, theme data, updates, reviews
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Customization

### Modify Products

Edit `src/data.js` to change the default product catalog.

### Modify Updates/News

Edit the `UPDATES` array in `src/data.js` to change hero slider content.

### Modify Reviews

Edit the `REVIEWS` array in `src/data.js` to change customer reviews.

### Change Theme Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
  --p: #6f46c7;      /* Primary purple */
  --p2: #8a63d2;     /* Secondary purple */
  --p3: #a88ce0;     /* Light purple */
  --ink: #241b32;    /* Dark text */
  --muted: #756b80;  /* Muted text */
  --lav: #f3effa;     /* Lavender background */
  /* ... */
}
```

### Change Fonts

The project uses **Inter** for body text and **Poppins** for headings. To change fonts:
1. Update the Google Fonts import in `src/index.css`
2. Update `font-family` declarations throughout the CSS and components

### WhatsApp Number

Change the WhatsApp number in `src/App.jsx`:
```javascript
window.open(`https://wa.me/YOUR_NUMBER?text=${msg}`, '_blank')
```

## Admin Panel

Access the admin panel by clicking the ♙ icon in the navigation.

**Demo Credentials:**
- Email: `admin@gmail.com`
- Password: `123admin`

**Important:** For production, replace the demo authentication with secure server-side authentication.

## Technologies Used

- React 18
- Vite (build tool)
- CSS (with CSS variables)
- Google Fonts (Inter, Poppins)
- LocalStorage (for product persistence)
- SessionStorage (for admin session)

## License

© 2026 FIZZ Studio
