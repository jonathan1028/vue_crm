<template>
  <div>
    <h2>New Person</h2>
    <div class="flex flex-column mt3">
      <input
        class="mb2"
        v-model="name"
        type="text"
        placeholder="Person's display name">
    </div>
    <button @click="createLink()">Submit</button>
  </div>
</template>

<script>
import { CREATE_PERSON_MUTATION, ALL_PEOPLE_QUERY } from '../constants/graphql'
import { GC_USER_ID } from '../constants/settings'

export default {
  name: 'People',
  data () {
    return {
      name: ''
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

      // Assign data from form inputs
      const newDisplayName = this.name
      // Clears out data??
      this.name = ''

      this.$apollo.mutate({
        mutation: CREATE_PERSON_MUTATION,
        variables: {
          // Sets variables in graphql.js
          displayName: newDisplayName,
          postedById
        },
        update: (store, { data: { createPerson } }) => {
          const data = store.readQuery({
            query: ALL_PEOPLE_QUERY
          })
          data.allPersons.push(createPerson)
          store.writeQuery({
            query: ALL_PEOPLE_QUERY,
            data
          })
        }
      // }).then((data) => {
      //   this.$router.push({path: '/'})
      }).catch((error) => {
        console.error(error)
        this.newDisplayName = newDisplayName
      })
    }
  }
}
</script>
