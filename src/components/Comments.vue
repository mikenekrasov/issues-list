<template>
  <ul class="comments-list">
    <li v-for="(comment, i) in comments" :key="i" class="comments__item">
      <img :src="comment.user.avatar_url" class="comments__avatar" alt="avatar">
      <div class="comments__name">{{ comment.user.login }}</div>
      <p class="comments__content">{{ comment.body }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    id: {
      type: [Number, String],
    },
  },
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const url = `https://api.github.com/repos/vuejs/vue/issues/${this.$props.id}/comments`;

      try {
        const response = await fetch(url);

        if (response.ok) {
          this.comments = await response.json();
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
</style>
