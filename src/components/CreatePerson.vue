<template>
  <div>
    <form class="box">
      <h1>New Person</h1>
      <div class="field">
        <label>First Name</label>
        <input
          v-model="firstName"
          type="text"
        >
      </div>
      <div class="field">
        <label>Last Name</label>
        <input
          v-model="lastName"
          type="text"
        >
      </div>
      <button @click="createLink()">Submit</button>
    </form>
  </div>
</template>

<script>
import { CREATE_PERSON_MUTATION, ALL_PEOPLE_QUERY } from '../constants/graphql'
import { GC_USER_ID } from '../constants/settings'

export default {
  name: 'CreatePerson',
  data () {
    return {
      firstName: '',
      lastName: ''
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
      const newDisplayName = this.firstName + ' ' + this.lastName
      // Clears out data??
      this.firstName = ''

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
