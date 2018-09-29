# index.html Structure
Last Updated: 9/28/2018

## Sites to reference for design and code

- [Vimeo](https://vimeo.com/search?q=dance)
- [Soundcloud](https://soundcloud.com/search?q=funk)
- [They Call Us Bruce](https://theycallusbruce.libsyn.com/)

### Nav Bar Structure
```
nav
├─ header.nav__header
│   ├─ div.nav__burger
│   ├─ a.nav__home
│   │   └─ img.logo_img
│   └─ h2.heading--sm
│
└─ ul.nav__list
    └─ li.nav__item (x 3)
        └─ a.nav__link (x 3)
```

### Main Body Structure

```
main
├─ section.intro
│   ├─ img.intro__banner
│   └─ div.intro__card
│       ├─ h1.heading--lg
│       └─ p.intro__text
│
├─ section.recent-content
│   ├─ div.heading-box
│   │   ├─ h2.heading--md
│   │   ├─ hr.heading-box__divider
│   │   └─ h3.subheading
│   │
│   └─ div.entry--video (x 3)
│       ├─ h4.heading--xs
│       ├─ span.upload-date
│       └─ iframe.video--lg
│
├─ section.recent-content
│   ├─ div.heading-box
│   │   ├─ h2.heading--md
│   │   ├─ hr.heading-box__divider
│   │   └─ h3.subheading
│   │
│   └─ div.entry--audio (x 3)
│       ├─ h4.heading--xs
│       ├─ span.upload-date
│       ├─ iframe.audio
│       └─ span.span-row--button
│           └─ button.sub-btn (x 3)
│    
└─ footer.footer
    ├─ div.icon-row--icon
    │   └─ i.icon--sm (x 3)
    └─ p.text--short
```

