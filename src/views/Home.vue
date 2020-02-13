<template>
  <div class="home">
    <issues-list/>
    <pagination/>
  </div>
</template>

<script>
import IssuesList from '@/components/IssuesList.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Home',
  components: {
    IssuesList,
    Pagination,
  },
};
</script>
