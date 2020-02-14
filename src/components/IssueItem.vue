<template>
  <li class="issues-list__item">
    <div class="issues-list__status">
      <template v-if="issue.state === 'open'">
        <svg class="issues-list__issue-open" viewBox="0 0 14 16" version="1.1" width="14"
             height="16" aria-hidden="true">
          <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0
        011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1
        3H6v5h2V4zm0 6H6v2h2v-2z"></path>
        </svg>
      </template>
      <template v-else>
        <svg class="issues-list__issue-closed" viewBox="0 0 16 16" version="1.1"
             width="16" height="16" aria-hidden="true">
          <path fill-rule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12
          7l-1.5-1.5zM8 13.7A5.71 5.71 0 012.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5
          2.2l.92-.92A6.947 6.947 0 008 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66
          2.41-2.86 4.19-5.48 4.19v-.01z">
          </path>
        </svg>
      </template>
    </div>
    <div class="issues-list__data">
      <router-link
        :to="{ name: 'SingleIssue', params: { id: issue.number }}"
        class="issues-list__link">
        {{ issue.title }}
      </router-link>
      <span class="labels">
      <span v-for="(label, i) in issue.labels" :key="i"
            :style="`backgroundColor: #${label.color}`"
            class="labels__item"
      >
        {{ label.name }}
      </span>
    </span>
    </div>
    <div class="issues-list__comments">
      <router-link
        :to="{ name: 'SingleIssue', params: { id: issue.number }}"
        class="issues-list__link"
      >
      <svg class="issues-list__comment comments v-align-middle" viewBox="0 0 16 16" version="1.1"
           width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 1H2c-.55 0-1
           .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2
           2v-2H2V2h12v8z"></path>
      </svg>
      <span class="comments__number">{{ issue.comments }}</span>
      </router-link>

    </div>

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
      bgColor: '',
    };
  },
};
</script>

<style scoped>

</style>
