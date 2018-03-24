<template>
  <div>
    <form class="box">
      <h1>{{this.person.displayName}}</h1>
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
      <div class="field">
        <label>Phone</label>
        <input
          v-model="phone1"
          type="text"
        >
      </div>
      <div class="field">
        <label>Email</label>
        <input
          v-model="email"
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
  name: 'EditPerson',
  beforeCreate () {
    this.person = JSON.parse(localStorage.getItem('person'))
    this.id = this.$route.params.id
  },
  data () {
    return {
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      phone1: this.person.phone1,
      email: this.person.email
    }
  },
  methods: {
    submit () {
      // Save the user input in case of an error
      const displayName = this.firstName + ' ' + this.lastName
      const firstName = this.firstName
      const lastName = this.lastName
      const phone1 = this.phone1
      const email = this.email
      // Clear it early to give the UI a snappy feel
      this.displayName = ''
      this.firstName = ''
      this.lastName = ''
      this.phone1 = ''
      this.email = ''

      this.$apollo.mutate({
        mutation: UPDATE_PERSON_MUTATION,
        variables: {
          id: this.id,
          displayName: displayName,
          firstName: firstName,
          lastName: lastName,
          phone1: phone1,
          email: email
        }
      })
        .catch((error) => {
          console.error(error)
        })
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
