import { reactive } from "vue";

export const store = reactive({
  topbarMenu: [
    {
      href: "#",
      text: "home",
    },

    {
      href: "#",
      text: "about",
    },

    {
      href: "#",
      text: "service",
    },

    {
      href: "#",
      text: "work",
    },

    {
      href: "#",
      text: "articles",
    },
  ],

  cardsModernConstr: [
    {
      icon: "fa-regular fa-building fa-2xl",
      title: "Buildings",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam tempora assumenda nobis.",
      backTitle: "artfully crafted",
      backText: "Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione adipisci accusamus.",
      buttonText: "get a quote"
    },
    {
      icon: "fa-solid fa-rotate fa-2xl",
      title: "Renovate",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam tempora assumenda nobis.",
      backTitle: "artfully crafted",
      backText: "Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione adipisci accusamus.",
      buttonText: "get a quote"
    },
    {
      icon: "fa-solid fa-house fa-2xl",
      title: "Construct",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam tempora assumenda nobis.",
      backTitle: "artfully crafted",
      backText: "Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione adipisci accusamus.",
      buttonText: "get a quote"
    },
    {
      icon: "fa-solid fa-truck fa-2xl",
      title: "Exclusive",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam tempora assumenda nobis.",
      backTitle: "artfully crafted",
      backText: "Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione adipisci accusamus.",
      buttonText: "get a quote"
    },

  ],

  cardsCounter: [
    {
      icon: "fa-solid fa-suitcase fa-2xl",
      title: "Planning Applications",
      numbers: 3534,
    },
    {
      icon: "fa-solid fa-building fa-2xl",
      title: "Completed Projects",
      numbers: 896,
    },
    {
      icon: "fa-solid fa-users fa-2xl",
      title: "Trained professionals",
      numbers: 172,
    },
    {
      icon: "fa-solid fa-globe fa-2xl",
      title: "International Offices",
      numbers: 19,
    },
  ],

  cardsWork: [
    {
      image: "project2-featured-15013609.jpg",
      title: "Florida Health Facility",
      text: "Commercial",
      href: "#",
      firstIcon: "fa-solid fa-link",
      secondIcon: "fa-solid fa-magnifying-glass"
    },
    {
      image: "project1-featured-294276386.jpg",
      title: "Florida Health Facility",
      text: "Commercial",
      href: "#",
      firstIcon: "fa-solid fa-link",
      secondIcon: "fa-solid fa-magnifying-glass"
    },
    {
      image: "project3-featured-189023420.jpg",
      title: "Florida Health Facility",
      text: "Commercial",
      href: "#",
      firstIcon: "fa-solid fa-link",
      secondIcon: "fa-solid fa-magnifying-glass"
    },
  ],

  cardsValues: [
    {
      icon: "fa-solid fa-house fa-2xl",
      title: "Great Services",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam expedita molestiae",
      color: "$darkTurquoise-color"
    },
    {
      icon: "fa-solid fa-gear fa-2xl",
      title: "Highest Standards",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam expedita molestiae",
      color: "$dodgerBlue-color"
    },
    {
      icon: "fa-solid fa-users fa-2xl",
      title: "Professional Team",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam expedita molestiae",
      color: "$orange-color"
    },
    {
      icon: "fa-solid fa-lightbulb fa-2xl",
      title: "Creative Solutions",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam expedita molestiae",
      color: "$green-color"
    },

  ],

  cardsLatest: [
    {
      image: "blog-post-134132600.jpg",
      bodyTitle: "Redeveloping Florida’s Remote Southern Coast",
      bodyDate: "December 7th, 2015",
      bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos voluptates esse? Quis natus quo officiis dolore.",
      href: "#",
      firstIcon: "fa-solid fa-link",
      secondIcon: "fa-solid fa-magnifying-glass",
      title: "Florida Health Facility",
      text: "Commercial"
    },
    {
      image: "blog-post-92486644.jpg",
      bodyTitle: "How We Manage Large Construction Projects",
      bodyDate: "December 7th, 2015",
      bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos voluptates esse? Quis natus quo officiis dolore.",
      href: "#",
      firstIcon: "fa-solid fa-link",
      secondIcon: "fa-solid fa-magnifying-glass",
      title: "Florida Health Facility",
      text: "Commercial"
    },
    {
      image: "blog-post-332773904.jpg",
      bodyTitle: "Future proofing a modern home",
      bodyDate: "December 6th, 2015",
      bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos voluptates esse? Quis natus quo officiis dolore.",
      href: "#",
      firstIcon: "fa-solid fa-link",
      secondIcon: "fa-solid fa-magnifying-glass",
      title: "Florida Health Facility",
      text: "Commercial"
    },
  ],

  iconPartners: [
    {
      icon: "home-logo11-219096700-320x202.png",
    },
    {
      icon: "home-logo10-219096700-320x202.png",
    },
    {
      icon: "home-logo2-219096700-320x202.png",
    },
    {
      icon: "home-logo1-219096700-320x202.png",
    },
    {
      icon: "home-logo9-219096700-320x202.png",
    },
  ],

  tweetsList: [
    {
      logo: "3a74ce3d0532b7773b174c45ca3bd05a_normal.png",
      image: "classic_thumbnail.jpg",
      title: "ThemeFusion",
      ashTitle: "@Theme_Fusion",
      icon: "fa-brands fa-twitter",
      bodyDate: "22h",
      bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos voluptates esse? Quis natus quo officiis dolore.",
      like: "fa-regular fa-heart",
      share: "fa-solid fa-arrow-right-from-bracket",
    },
    {
      logo: "3a74ce3d0532b7773b174c45ca3bd05a_normal.png",
      image: null,
      title: "ThemeFusion",
      ashTitle: "@Theme_Fusion",
      icon: "fa-brands fa-twitter",
      bodyDate: "22h",
      bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos voluptates esse? Quis natus quo officiis dolore.",
      like: "fa-regular fa-heart",
      share: "fa-solid fa-arrow-right-from-bracket",
    },
    {
      logo: "3a74ce3d0532b7773b174c45ca3bd05a_normal.png",
      image: "En2TRxLW4AEiWUN.jpeg",
      title: "ThemeFusion",
      ashTitle: "@Theme_Fusion",
      icon: "fa-brands fa-twitter",
      bodyDate: "15h",
      bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos voluptates esse? Quis natus quo officiis dolore, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos voluptates esse? Quis natus quo officiis dolore.",
      like: "fa-regular fa-heart",
      share: "fa-solid fa-arrow-right-from-bracket",
    },
    {
      logo: "3a74ce3d0532b7773b174c45ca3bd05a_normal.png",
      image: "92124892-54cc2e00-edcc-11ea-8994-f15925e53b1e.jpg",
      title: "ThemeFusion",
      ashTitle: "@Theme_Fusion",
      icon: "fa-brands fa-twitter",
      bodyDate: "2h",
      bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore minus officiis facere repellat amet a fugit tenetur id quasi!",
      like: "fa-regular fa-heart",
      share: "fa-solid fa-arrow-right-from-bracket",
    },
  ],

  contactsMenu: [
    {
      icon: "fa-solid fa-globe",
      text: "Corporate Location 1600 Amphitheatre Parkway London WC1 1BA",
    },
    {
      icon: "fa-solid fa-house-chimney",
      text: "Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA",
    },
    {
      icon: "ffa-solid fa-phone-flip",
      text: "1.800.458.556 / 1.800.532.2112",
    },
    {
      icon: "fa-regular fa-envelope",
      text: "info@your-domain.com",
    },
    {
      icon: "fa-regular fa-clock",
      text: "Monday - Friday:9:00 AM - 6:00 PM",
    },
    {
      icon: "fa-regular fa-clock",
      text: "Saturday - Sunday:9:00 AM - 12:00 PM",
    },
  ],

  socialIcons: [
    {
      icon: "fa-brands fa-square-facebook",
      title: "facebook",
      href: "#"
    },
    {
      icon: "fa-brands fa-square-twitter",
      title: "twitter",
      href: "#"
    },
    {
      icon: "fa-brands fa-youtube",
      title: "youtube",
      href: "#"
    },
    {
      icon: "fa-brands fa-instagram",
      title: "youtube",
      href: "#"
    },
  ],
});
