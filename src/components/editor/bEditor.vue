<template>
  <div class="editor">
    <div class="container">
      <div class="col-9 col-md-9 col-lg-9 mx-auto">
        <form class="mt-5" @submit.prevent="onSubmit">
          <div class="form-group">
            <div class="mt-3">
              <label for="article-title">Заголовок</label>
              <input type="text" class="form-control" id="article-title" v-model="articleTitle" />
            </div>
            <div class="mt-3">
              <label for="article-description">Описание</label>
              <input type="text" class="form-control" id="article-description" v-model="articleDescription" />
            </div>
            <div class="mt-3">
              <label for="article-body">Текст</label>
              <textarea class="form-control" id="article-body" rows="3" v-model="articleBody"></textarea>
            </div>
          </div>
          <div class="text-end mt-3">
            <button type="submit" class="btn btn-primary px-5">Опубликовать</button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
          this.$router.push({ name: "main-feed" });
        });
    },
  },
};
</script>
<style lang="scss">

</style>
