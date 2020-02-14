<template>
  <div class="home">
    <issues-list/>
  </div>
</template>

<script>
import IssuesList from '@/components/IssuesList.vue';

export default {
  name: 'Home',
  components: {
    IssuesList,
  },
};
</script>
