# Directives
- Keep it simple and reuse as much as possible
- Code standards as if it were written by a single person
- Scalability oriented

# Structure
- css
- images
- sass
- index.html

# Standards
- BEM methodology
- File names in plural (Example: `_buttons.scss`)
- Singular and lowercase classes (Example: `gallery__button`)
- Image naming relative to it's container (Example: `search-icon.png`)

# Syntax
- Single space after selector and before `{}`
- Two tabs intentation
- Single space after `:`
- CSS blocks separated by two lines
- Avoid heavy nested selectors. Maximum two levels
- Mixins for size, styles and font sizes

# Properties order
1. Positioning (`position`, `left`, `top`, `right`, etc)
2. Box model (`display`, `width`, `height`, `margin`, etc)
3. Typography (`font-size`, `font-weight`, `text-transform`, `text-decoration`, etc)
4. Decorators (`background-image`, `color`, etc)
5. Variables
6. Mixins

## Example:
```
.button {
    display: block;
    width: 220px;
    height: 40px;
    position: relative;
    text-transform: uppercase;
    background-color: #333333;
    font-weight: $semibold;
    @include font-size (13px);
}
```