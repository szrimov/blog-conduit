<template>
  <section class="editor">
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
                v-model="articleTitle"
              />
            </div>
            <div class="mt-3">
              <label for="article-description">Article description</label>
              <input
                type="text"
                class="form-control"
                id="article-description"
                v-model="articleDescription"
              />
            </div>
            <div class="mt-3">
              <label for="article-body">Article body text</label>
              <textarea
                class="form-control"
                id="article-body"
                rows="3"
                v-model="articleBody"
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
          title: this.articleTitle,
          description: this.articleDescription,
          body: this.articleBody,
          tagList: [],
        })
        .then(() => {
          console.log("статья успешно опубликована");
          this.$router.push({ name: "main-feed" });
        });
    },
  },
};
</script>

<style lang="scss"></style>
