<template>
  <li class="issues-list__item">
    <router-link
      :to="{ name: 'SingleIssue', params: { id: issue.number }}"
      class="issues-list__link">
      {{ issue.title }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'IssueItem',
  props: {
    issue: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>
