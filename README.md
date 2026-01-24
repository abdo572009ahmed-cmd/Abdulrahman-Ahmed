# Professional Personal Portfolio

A bilingual (English/Arabic), responsive personal portfolio website built with clean HTML, CSS, and JavaScript.

## 🌟 Features

-   **Bilingual Support**: Toggle between English (LTR) and Arabic (RTL) seamlessly.
-   **Dark/Light Mode**: User preference is saved via `localStorage`.
-   **Responsive Design**: Fully responsive for Mobile, Tablet, and Desktop.
-   **Clean Animations**: Smooth fade-in effects on scroll.
-   **No Frameworks**: Pure Vanilla JS and CSS variables for easy maintenance.

## 🛠️ Setup & Usage

1.  **Clone or Download** the folder.
2.  Open `index.html` in your browser.

## 📝 How to Edit Content

### Changing Text (Translations)
All text content is managed in `script.js` within the `translations` object.

```javascript
const translations = {
    en: {
        hero_title: "Changes here update the English title",
        ...
    },
    ar: {
        hero_title: "التغييرات هنا تحدث العنوان العربي",
        ...
    }
};
```

### Adding Projects/Skills
1.  **Skills**: Add new `<span class="skill-tag">Skill Name</span>` in `index.html`.
2.  **Projects**: Duplicate the `.project-card` div in `index.html` and ensure you add `data-i18n` attributes if you want them to be translatable, or just hardcode text if you prefer.

## 🚀 Deployment (GitHub Pages)

1.  Create a new repository on GitHub.
2.  Push these files to the repository.
3.  Go to **Settings** > **Pages**.
4.  Select `main` branch as the source.
5.  Your site will be live at `https://yourusername.github.io/repo-name`.

## 🎨 Customizing Theme

Open `styles.css` and modify the CSS variables in the `:root` and `[data-theme="light"]` blocks.

```css
:root {
    --accent-color: #38bdf8; /* Change this hex code */
}
```
