<template>
  <section
    class="editor"
    v-if="Object.keys(this.$store.state.article.article).length"
  >
    <div class="container">
      <div class="col-9 col-md-9 col-lg-9 mx-auto">
        <form class="mt-5" @submit.prevent="onSubmit">
          <div class="form-group">
            <div class="mt-3">
              <label for="article-title">Article title</label>
              <input
                type="text"
                class="form-control"
                id="article-title"
                v-model="form.title"
              />
            </div>
            <div class="mt-3">
              <label for="article-description">Article description</label>
              <input
                type="text"
                class="form-control"
                id="article-description"
                v-model="form.description"
              />
            </div>
            <div class="mt-3">
              <label for="article-body">Article body text</label>
              <textarea
                class="form-control"
                id="article-body"
                rows="3"
                v-model="form.body"
              ></textarea>
            </div>
          </div>

          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary px-5">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articleTitle: "",
      articleDescription: "",
      articleBody: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("postArticle", {
          title: this.form.title,
          description: this.form.description,
          body: this.form.body,
          tagList: [],
        })
        .then(() => {
          console.log("статья успешно опубликована");
          this.$router.push({ name: "main-feed" });
        });
    },
  },
  computed: {
    form() {
      if (Object.keys(this.$store.state.article.article).length) {
        return {
          title: this.$store.state.article.article.title,
          description: this.$store.state.article.article.description,
          body: this.$store.state.article.article.body,
          tagList: this.$store.state.article.article.tagList.length
            ? this.$store.state.article.article.tagList
            : "",
        };
      }
      return {
        title: "",
        description: "",
        body: "",
        tagList: "",
      };
    },
  },
  mounted() {
    this.$store.dispatch("getArticle", this.$route.params.slug);
  },
};
</script>

<style lang="scss"></style>
