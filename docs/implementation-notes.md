# Implementation Notes

## Overview

- The following are placeholder:
  - SASE Logo
  - Footer icons
  - Intro backgrounds
  - Youtube video embed
  - Chasers libsyn embed
- The following needs to be set up/ done from a styling perspective:
  - typography
  - footer content
  - color palette/ branding
  - buttons
  - `.nav__item` hover state
  - Nav bar side scroll
    - referencing the nav bar for the saseconnect.org site on tablets

## SCSS Notes

### Directory notes

- `_mixins` is where mixins are
  - basically just a shortcut for not repeating the same CSS values over and over
  - `breakpoints.scss` is here
- `_modules` is for actual components
  - buttons, cards, CSS Grid templates at some point, and colors are here
- `_partials` is where CSS for the actual sections of the HTML is
  - includes an image directory

### General Notes

- Breakpoints should largely be okay
  - Based off of Bootstrap's breakpoints
- Current colors are placeholders
- Need to make flexbox mixins
  - repeating the same commands and they're relatively the s ame
- 


## JavaScript Notes

- Mostly simple functions here
  - should be relatively self-contained