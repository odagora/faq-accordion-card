# Frontend Mentor - FAQ accordion card

This is a solution to the [FAQ accordion card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of content
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:
- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked
- **Bonus**: Complete the challenge without using JavaScript

### Screenshots
![Mobile Version](https://bit.ly/3X3rB4G)
![Desktop Version](https://bit.ly/3ZuEuqb)

### Links

- Solution URL: [Click here](http://bit.ly/3GCbNyW)
- Live Site URL: [Visit here](https://odagora.github.io/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM methodology
- Cypress UI testing

### What I learned

1. Use of `<details>` and `<summary>` html tags for creating a disclosure widget
    ```html
    <details>
      <summary>How many team members can I invite?</summary>
      <p>You can invite up to 2 additional users on the Free plan. There is no limit on
        team members for the Premium plan.</p>
    </details>
    ```
    ```css
    & details[open] > summary {
        font-weight: 700;
        color: $primary-dark-text;
    }
    & details[open] > summary::before {
        transform: rotate(180deg);
        transition: 0.45s transform ease;
    }
    & details[open] p {
        color: $neutral-soft-text;
    }
    ```

2. Use of `<input type="radio>"` with styling for one element selection at a time
    ```html
    <div class="list__item">
      <input type="radio" id="item1" name="item">
      <label for="item1">How many team members can I invite?</label>
      <div class="item__content">You can invite up to 2 additional users on the Free plan. There is no limit on
        team members for the Premium plan.</div>
    </div>
    ```
    ```css
    & input {
        position: absolute;
        opacity: 0;
        z-index: -1;
        &:checked {
            + label {
                font-weight: 700;
                color: $primary-dark-text;
                &::before {
                    transform: rotate(180deg);
                    transition: 0.45s transform ease;
                }
            }
            ~ .item__content {
                overflow: auto;
                height: 70px;
                color: $neutral-soft-text;
                animation: hide-scroll 0.5s backwards;
            }
        }
    }
    ```
3. Use of `transform` and `transition` css properties for elements animations
    ```css
    &::before {
        position: absolute;
        content: url('../images/icon-arrow-down.svg');
        color: $primary-soft-text;
        left: unset;
        right: 2.4rem;
        transform: rotate(0);
        transition: 0.45s transform ease;
    }
    ```
4. Use of `animations` to hide vertical scroll bar
    ```css
    ~ .item__content {
      overflow: auto;
      height: 70px;
      color: $neutral-soft-text;
      animation: hide-scroll 0.5s backwards;
    }
    ```
    ```css
    @keyframes hide-scroll {
      from, to { overflow: hidden; }
    }
    ```
5. Use of `scaleY()` css method for changing the scale of an element with animation
    ```css
    & .item__content {
        height: 0;
        transition:height 1s ease-out;
        -webkit-transform: scaleY(0);
        -o-transform: scaleY(0);
        -ms-transform: scaleY(0);
        transform: scaleY(0);
    }
    ```
    ```css
    & .item__content {
        padding-bottom: 15px;
        -webkit-transform: scaleY(1);
        -o-transform: scaleY(1);
        -ms-transform: scaleY(1);
        transform: scaleY(1);
    }
    ```
6. UI testing implementation with Cypress
    ```js
    describe('Accordion answers can be opened on click', () => {
      it('Hides first item and opens on click', () => {
        cy.visit('http://127.0.0.1:5500/')

        //First answer is not visible by default
        cy.get("[data-qa=item-desc]").first().should("not.be.visible")
      ...
    }
    ```
### Continued development

- Use of preprocessors like SASS for styling
- Use of CSS Grid in complex layouts
- Use of transformations and animations with CSS
- Implementation of UI testing
- Use of accessibility principles
- Cross-browser support

## Author

- Website - [Daniel González](https://odagora.com/)
- Frontend Mentor - [@odagora](https://www.frontendmentor.io/profile/odagora)
- Twitter - [@odagora](https://www.twitter.com/odagora)

## Acknowledgments

The Frontend Platzi courses helped me with the basic concepts of semantic HTML, CSS3, BEM methodology and Cypress. Also, I implemented best practices regarding responsive design, performance and accesibility.