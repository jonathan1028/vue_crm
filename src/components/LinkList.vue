<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <!-- this creates a link variable and index variable for each item in the list -->
    <link-item
      v-for="(link, index) in allLinks"
      :key="link.id"
      :link="link"
      :index="index"
      >
    </link-item>
  </div>
</template>

<script>
import { ALL_LINKS_QUERY, NEW_LINKS_SUBSCRIPTION } from '../constants/graphql'
// import { ALL_LINKS_QUERY } from '../constants/graphql'
import LinkItem from './LinkItem'

export default {
  name: 'LinkList',
  data () {
    return {
      allLinks: [],
      loading: 0
    }
  },
  components: {
    LinkItem
  },
  apollo: {
    allLinks: {
      query: ALL_LINKS_QUERY,
      subscribeToMore:
      [{
        document: NEW_LINKS_SUBSCRIPTION,
        // mutate the previous result
        updateQuery: (previous, { subscriptionData }) => {
          const newAllLinks = [
            subscriptionData.data.Link.node,
            ...previous.allLinks
          ]
          const result = {
            ...previous,
            allLinks: newAllLinks
          }
          return result
        }
      }]
    }
  }
}
</script>
