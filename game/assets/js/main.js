Vue.createApp({
  data() {
    return {
      level: 4,
      pokemons: [],
      totalFlipped: 0,
      maxFlipped: 10,
      countFlipped: 0,
      win: false,
      resultAlert: false,
    };
  },
  computed: {
    restOfFlips() {
      return this.maxFlipped - this.totalFlipped;
    },
  },
  watch: {
    countFlipped(newValue) {
      if (newValue === 2) {
        ++this.totalFlipped;
        this.countFlipped = 0;

        this.$nextTick(() => {
          const isWin =
            this.pokemons.length > 0 && this.pokemons.every((p) => p.isMatched);

          if (isWin) {
            this.win = true;
            this.resultAlert = true;

            return;
          }

          if (this.totalFlipped === this.maxFlipped) {
            this.resultAlert = true;
          }
        });
      }
    },
  },
  methods: {
    async getPokemons() {
      try {
        const response = await fetch("assets/data.json");
        const pokemons = await response.json();

        const randomSelection = pokemons.sort(() => 0.5 - Math.random());
        randomSelection.length = this.level;

        let finalDeck = [
          ...randomSelection.map((pokemon) => {
            let copy = structuredClone(pokemon);
            copy.uniqueId = Math.random();
            copy.isFlipped = false;
            copy.isMatched = false;
            return copy;
          }),
          ...randomSelection.map((pokemon) => {
            let copy = structuredClone(pokemon);
            copy.uniqueId = Math.random();
            copy.isFlipped = false;
            copy.isMatched = false;
            return copy;
          }),
        ];

        for (let i = finalDeck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [finalDeck[i], finalDeck[j]] = [finalDeck[j], finalDeck[i]];
        }

        this.pokemons = finalDeck;
      } catch (error) {
        console.error("Error loading pokemons:", error);
      }
    },
    handlePickLevel(e) {
      if (e.target.value === this.level) {
        return;
      }

      console.log("ok");

      this.level = +e.target.value;
      this.getPokemons();
    },
    handlePickPokemon(uniqueId) {
      const clickedPokemon = this.pokemons.find((p) => p.uniqueId === uniqueId);

      if (
        !clickedPokemon ||
        clickedPokemon.isFlipped ||
        clickedPokemon.isMatched
      ) {
        return;
      }

      const openedPokemons = this.pokemons.filter(
        (p) => p.isFlipped && !p.isMatched,
      );

      if (openedPokemons.length === 2) {
        return;
      }

      clickedPokemon.isFlipped = true;
      ++this.countFlipped;

      const currentOpenedPokemons = this.pokemons.filter(
        (p) => p.isFlipped && !p.isMatched,
      );

      if (currentOpenedPokemons.length < 2) {
        return;
      }

      const [firstPokemon, secondPokemon] = currentOpenedPokemons;

      if (firstPokemon.name === secondPokemon.name) {
        firstPokemon.isMatched = true;
        secondPokemon.isMatched = true;
        return;
      }

      setTimeout(() => {
        firstPokemon.isFlipped = false;
        secondPokemon.isFlipped = false;
      }, 1000);
    },
    handleResetGame() {
      this.pokemons = [];
      this.totalFlipped = 0;
      this.maxFlipped = 10;
      this.countFlipped = 0;
      this.win = false;
      this.resultAlert = false;

      this.getPokemons();
    },
  },
  mounted() {
    this.getPokemons();
  },
}).mount("#app");
