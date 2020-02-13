<template>
  <div class="issues">
    <div class="issues-header">
      Issues
    </div>
    <ul class="issues-list">
      <issue-item v-for="(issue, i) in issues" :key="i" :issue="issue"/>
    </ul>
  </div>
</template>

<script>
import IssueItem from '@/components/IssueItem.vue';

export default {
  name: 'IssuesList',
  components: {
    IssueItem,
  },
  data() {
    return {
      issues: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const url = 'https://api.github.com/repos/vuejs/vue/issues?state=open';

      try {
        const response = await fetch(url);

        if (response.ok) {
          this.issues = await response.json();
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
