<template>
  <div class="issues">
    <div class="issues-header">
      Issues
    </div>
    <ul class="issues-list">
      <issue-item v-for="(issue, i) in issues" :key="i" :issue="issue"/>
    </ul>
    <button @click="fetchData(url.url)"
            v-for="(url, i) in urls" :key="i"
            class="btn pagination-btn"
    >
      {{ url.title }}
    </button>
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
      urls: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData(url = 'https://api.github.com/repos/vuejs/vue/issues') {
      try {
        const response = await fetch(url);

        if (response.ok) {
          // pagination

          const link = response.headers.get('link');
          const links = link.split(',');

          this.urls = links.map((item) => {
            const formatUrl = item.split(';')[0]
              .replace('>', '')
              .replace('<', '');
            const formatTitle = item.split(';')[1]
              .replace('rel="', '')
              .replace('"', '');
            return {
              url: formatUrl,
              title: formatTitle,
            };
          });

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
