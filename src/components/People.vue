<template>
  <div>
    <create-person></create-person>
    <div class="box effect6">
      <div class="box-content">
        <h1>People</h1>
        <div>
          <form class="search">
            <input name="query" v-model="searchQuery" placeholder="Search">
          </form>
          <vue-table
            :data="allPersons"
            :columns="gridColumns"
            :filter-key="searchQuery">
          </vue-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePerson from './CreatePerson'
import VueTable from './VueTable'
import { ALL_PEOPLE_QUERY, NEW_PEOPLE_SUBSCRIPTION } from '../constants/graphql'

export default {
  name: 'People',
  components: {
    CreatePerson, VueTable
  },
  data () {
    return {
      allPersons: [],
      sortColumn: '',
      searchQuery: '',
      gridColumns: ['displayName', 'firstName', 'phone1', 'email']
      // gridData: [
      //   { name: 'Chuck Norris', power: Infinity },
      //   { name: 'Bruce Lee', power: 9000 },
      //   { name: 'Jackie Chan', power: 7000 },
      //   { name: 'Jet Li', power: 8000 }
      // ]
    }
  },
  created () {
    this.$store.commit('increment')
    console.log('store', this.$store.state.count)
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
.search{
  width: 38%;
}
</style>
