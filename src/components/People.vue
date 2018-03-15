<template>
  <div>
    <create-person></create-person>
    <h2>People</h2>
    <div>
      <table class="table">
        <tr>
          <th>Name</th>
          <th>2</th>
          <th>3</th>
        </tr>
        <tr
          v-for="person in allPersons"
          :key="person.id"
        >
          <td>{{person.displayName}}</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ALL_PEOPLE_QUERY, NEW_PEOPLE_SUBSCRIPTION } from '../constants/graphql'
import CreatePerson from './CreatePerson'

export default {
  name: 'People',
  components: {
    CreatePerson
  },
  data () {
    return {
      allPersons: []
    }
  },
  apollo: {
    // allPerson here pulls the data from ALL_PEOPLE_QUERY and assigns it to the data(){} object at the top of script
    allPersons: {
      query: ALL_PEOPLE_QUERY,
      subscribeToMore:
      [
        {
          document: NEW_PEOPLE_SUBSCRIPTION,
          // mutate the previous result
          updateQuery: (previous, { subscriptionData }) => {
            const newAllPersons = [
              ...previous.allPersons, subscriptionData.data.Person.node
            ]
            const result = {
              ...previous,
              // Changed from allLinks: newAllLinks to the below to add pagination feature
              // This change ensures that only the most recent LINKS_PER_PAGE links
              // will be shown even after an update through subscriptions.
              // newAllLinks.slice(0, LINKS_PER_PAGE)
              allPersons: newAllPersons
            }
            return result
          }
        }
      ]
    }
  }
}
</script>

<style>
  .table {
    width: 100%;
  }
</style>
