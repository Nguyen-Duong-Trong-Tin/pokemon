Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClickMe() {
      alert('You clicked me!');
    },
    handleIncrease(quantity) {
      this.count += quantity;
    },
    handleSubmit() {
      alert('Form submitted!');
    },
    handleLogin() {
      alert('Logged in!');
    }
  }
}).mount('#event-handling');

Vue.createApp({
  data() {
    return {
      message: ""
    }
  },
}).mount('#two-way-binding');

Vue.createApp({
  data() {
    return {
      count: 0,
      firstName: "John",
      lastName: "Doe"
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    increseCount() {
      ++this.count;
    }
  }
}).mount('#computed-and-watch');

Vue.createApp({
  data() {
    return {
      styleForP: {
        backgroundColor: "red",
        color: "blue",
        fontSize: "20px"
      },
      styleForText: {
        textAlign: "left",
        fontWeight: "bold"
      },
      active: false
    }
  },
  methods: {
    handleFormat() {
      this.styleForP.backgroundColor = "blue";
      this.styleForP.color = "green";
    },
    handleActive() {
      this.active = true;
    }
  }
}).mount('#styling');