<template>
  <div>
    <form class="box">
      <h1>{{person.displayName}}</h1>
      <div class="field">
        <label>First Name</label>
        <input
          v-model="person.firstName"
          type="text"
        >
      </div>
      <div class="field">
        <label>Last Name</label>
        <input
          v-model="person.lastName"
          type="text"
        >
      </div>
      <div class="field">
        <label>Phone</label>
        <input
          v-model="person.phone1"
          type="text"
        >
      </div>
      <div class="field">
        <label>Email</label>
        <input
          v-model="person.email"
          type="text"
        >
      </div>
      <button @click="submit()">Update</button>
    </form>
  </div>
</template>

<script>
import { UPDATE_PERSON_MUTATION } from '../constants/graphql'
// import { GC_USER_ID } from '../constants/settings'

export default {
  name: 'UpdatePerson',
  data () {
    return {
      person: JSON.parse(localStorage.getItem('person'))
    }
  },
  methods: {
    submit () {
      // Save the user input in case of an error
      const displayName = this.person.firstName + ' ' + this.person.lastName
      const firstName = this.person.firstName
      const lastName = this.person.lastName
      const phone1 = this.person.phone1
      const email = this.person.email
      // Clear it early to give the UI a snappy feel
      this.displayName = ''
      this.firstName = ''
      this.lastName = ''
      this.phone1 = ''
      this.email = ''

      console.log('this', this.person.firstName)

      this.$apollo.mutate({
        mutation: UPDATE_PERSON_MUTATION,
        variables: {
          id: this.person.id,
          displayName: displayName,
          firstName: firstName,
          lastName: lastName,
          phone1: phone1,
          email: email
        }
      })
      this.$router.push({path: '/people'})
    }
    // updatePerson () {
    //   // Checks permissions
    //   const postedById = localStorage.getItem(GC_USER_ID)
    //   if (!postedById) {
    //     console.error('No user logged in')
    //     return
    //   }

    //   // Save the user input in case of an error
    //   const newDisplayName = this.firstName + ' ' + this.lastName
    //   // const firstName = this.firstName
    //   // const lastName = this.lastName
    //   // We clear it early to give the UI a snappy feel
    //   // this.firstName = ''
    //   console.log('Person', this.firstName)
    //   this.$apollo.mutate({
    //     mutation: UPDATE_PERSON_MUTATION,
    //     variables: {
    //       ...this.person,
    //       displayName: newDisplayName
    //     }
    //     // update (data) {
    //     //   console.log(data)
    //     // }
    //     // update: (store, { data: { createPerson } }) => {
    //     //   // We get our current store for the given Query
    //     //   const data = store.readQuery({
    //     //     query: ALL_PEOPLE_QUERY
    //     //   })
    //     //   //We add the new data
    //     //   data.allPersons.push(createPerson)
    //     //   //We update the cache
    //     //   store.writeQuery({
    //     //     query: ALL_PEOPLE_QUERY,
    //     //     data
    //     //   })
    //     // }
    //   // }).then((data) => {
    //   //   console.log(data)
    //   }).catch((error) => {
    //     console.error(error)
    //     this.newDisplayName = newDisplayName
    //   })
    // }
  }
}
</script>
