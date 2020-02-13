<template>
  <div>
    <h2>
      {{ issue.title }}
    </h2>
      <comments :id="id"/>
  </div>
</template>

<script>
import Comments from '@/components/Comments.vue';

export default {
  name: 'SingleIssue',
  components: {
    Comments,
  },
  props: {},
  data() {
    return {
      issue: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchData() {
      const url = `https://api.github.com/repos/vuejs/vue/issues/${this.id}`;

      try {
        const response = await fetch(url);

        if (response.ok) {
          this.issue = await response.json();
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>

</style>
