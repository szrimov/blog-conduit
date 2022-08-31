<template>
  <section class="editor">
    <div class="container">
      <div class="col-9 col-md-9 col-lg-9 mx-auto">
        <form
          class="mt-5"
          @submit.prevent="onSubmit"
          @keypress.enter.prevent="addTag"
        >
          <div class="form-group">
            <div class="mt-3">
              <label for="article-title">Article title</label>
              <input
                type="text"
                class="form-control"
                id="article-title"
                v-model="title"
              />
            </div>
            <div class="mt-3">
              <label for="article-description">Article description</label>
              <input
                type="text"
                class="form-control"
                id="article-description"
                v-model="description"
              />
            </div>
            <div class="mt-3">
              <label for="article-body">Article body text</label>
              <textarea
                class="form-control"
                id="article-body"
                rows="3"
                v-model="body"
              ></textarea>
            </div>
            <div class="mt-3">
              <label for="article-title">Tags</label>
              <input
                type="text"
                class="form-control"
                id="article-title"
                v-model="tag"
              />
            </div>

            <template v-if="tags.length">
              <div class="article__tags" v-for="tag in tags" :key="tag">
                <div class="article__tags-wrapper">
                  <div class="article__tag">{{ tag }}</div>
                  <div
                    class="material-icons article__tag-close-ico"
                    @click="removeTag(tag)"
                  >
                    close
                  </div>
                </div>
              </div>
            </template>
          </div>

          <div class="text-end mt-3">
            <button type="submit" class="btn btn-outline-primary px-5">
              Submit
            </button>
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
      title: "",
      description: "",
      body: "",
      tag: "",
      tags: [],
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("postArticle", {
          title: this.title,
          description: this.description,
          body: this.body,
          tagList: this.tags,
        })
        .then(() => {
          console.log("статья успешно опубликована");
          this.$router.push({ name: "main-feed" });
        });
    },
    addTag() {
      if (!this.tags.includes(this.tag)) this.tags.push(this.tag);
      this.tag = "";
    },
    removeTag(tag) {
      this.tags = this.tags.filter((el) => el !== tag);
    },
  },
};
</script>

<style lang="scss">
.article__tags {
  padding: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background: rgb(208, 208, 208);
  display: inline-block;
}
.article__tags-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.article__tag {
  margin-right: 10px;
}
.article__tag-close-ico {
  cursor: pointer;
}
</style>
