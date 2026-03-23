import { getRandomInt } from "./helpers/random.js";

Vue.createApp({
  data() {
    return {
      fullName: "Nguyen Duong Trong Tin",
      myClass: 334,
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      imageUrl:
        "https://res.cloudinary.com/df7e20fdm/image/upload/v1736868496/v3wkykrgehd8ut3izabt.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Jack_%E2%80%93_J97",
    };
  },
}).mount("#bind-attribute");

Vue.createApp({
  methods: {
    generatePoints() {
      let points = 0;

      for (let i = 0; i < 3; i++) {
        const number = getRandomInt(1, 7);
        points += number;
      }

      return points;
    },
    renderTaiHayXiu() {
      const points = this.generatePoints();

      if (points > 11) {
        return "Tai " + points + " points";
      }

      return "Xiu " + points + " points";
    },
  },
}).mount("#method");

Vue.createApp({
  data() {
    return {
      message: "<h1>Learning VueJS is the best</h1>",
    };
  },
}).mount("#raw-html");

Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClickMe() {
      alert("You clicked me!");
    },
    handleIncrease(quantity) {
      this.count += quantity;
    },
    handleSubmit() {
      alert("Form submitted!");
    },
    handleLogin() {
      alert("Logged in!");
    },
  },
}).mount("#event-handling");

Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
}).mount("#two-way-binding");

Vue.createApp({
  data() {
    return {
      count: 0,
      firstName: "John",
      lastName: "Doe",
    };
  },
  watch: {
    count(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    increseCount() {
      ++this.count;
    },
  },
}).mount("#computed-and-watch");

Vue.createApp({
  data() {
    return {
      styleForP: {
        backgroundColor: "red",
        color: "blue",
        fontSize: "20px",
      },
      styleForText: {
        textAlign: "left",
        fontWeight: "bold",
      },
      active: false,
    };
  },
  methods: {
    handleFormat() {
      this.styleForP.backgroundColor = "blue";
      this.styleForP.color = "green";
    },
    handleActive() {
      this.active = true;
    },
  },
}).mount("#styling");

Vue.createApp({
  data() {
    return {
      isLogin: false,
      champion: "",
    };
  },
  methods: {
    handleLogin() {
      this.isLogin = true;
    },
    pickChampion(champion) {
      this.champion = champion;
    },
  },
}).mount("#directive");

Vue.createApp({
  data() {
    return {
      listOfSingers: [
        {
          name: "Lisa",
          imageUrl:
            "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/12/30/866476/Lisa-Blackpink-3.jpg",
        },
        {
          name: "Rose",
          imageUrl:
            "https://www.billboard.com/wp-content/uploads/2025/05/ROSE-met-gala-carpet-2025-billboard-1548.jpg",
        },
        {
          name: "Jie",
          imageUrl:
            "https://cafefcdn.com/203337114487263232/2025/6/30/rose-3-55495278928390660096590-1751246769423-17512467696231247356770.png",
        },
      ],
    };
  },
}).mount("#list-rendering");
