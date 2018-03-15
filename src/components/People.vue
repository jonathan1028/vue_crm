<template>
  <div>
    <div class="flex flex-column mt3">
      <input
        class="mb2"
        v-model="displayName"
        type="text"
        placeholder="Person's display name">
    </div>
    <button @click="createLink()">Submit</button>
  </div>
</template>

<script>
// import { ALL_LINKS_QUERY, CREATE_LINK_MUTATION } from '../constants/graphql'
import { CREATE_PERSON_MUTATION } from '../constants/graphql'
import { GC_USER_ID } from '../constants/settings'

export default {
  name: 'People',
  data () {
    return {
      displayName: ''
    }
  },
  methods: {
    createLink () {
      // Checks permissions
      const postedById = localStorage.getItem(GC_USER_ID)
      if (!postedById) {
        console.error('No user logged in')
        return
      }

      // Assigns data
      const newDisplayName = this.displayName
      // Clears out data??
      this.displayName = ''

      this.$apollo.mutate({
        mutation: CREATE_PERSON_MUTATION,
        variables: {
          displayName: newDisplayName,
          postedById
        }
        // update: (store, { data: { createLink } }) => {
        //   const data = store.readQuery({
        //     query: ALL_LINKS_QUERY,
        //     variables: {
        //       first: 5,
        //       skip: 0,
        //       orderBy: 'createdAt_DESC'
        //     }
        //   })
        //   data.allLinks.push(createLink)
        //   store.writeQuery({
        //     query: ALL_LINKS_QUERY,
        //     variables: {
        //       first: 5,
        //       skip: 0,
        //       orderBy: 'createdAt_DESC'
        //     },
        //     data
        //   })
        // }
      }).then((data) => {
        this.$router.push({path: '/'})
      }).catch((error) => {
        console.error(error)
        this.newDisplayName = newDisplayName
      })
    }
  }
}
</script>
