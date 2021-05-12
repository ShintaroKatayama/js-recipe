const app = new Vue({
  el: "#app",
  data: {
    feedback: "",
    quiz: {
      text: "この星の名前は何でしょう?",
      image: "Ganymede.jpg",
      list: [
        {
          text: "ゴリアテ",
          feedback: "残念！",
        },

        {
          text: "ゼニガメ",
          feedback: "残念！",
        },
        {
          text: "ガニメデ",
          feedback: "正解！",
        },
      ],
    },
  },
  methods: {
    choiced: function(todo) {
      this.feedback = todo.feedback
    },
  },
  computed: {
    quizImagePath: function() {
      return "./images/" + this.quiz.image
    },
  },
})
