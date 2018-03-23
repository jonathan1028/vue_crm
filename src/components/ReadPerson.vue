<template>
  <div>
    <div class="box">
      <h1>Person {{id}}</h1>
      <div>
        <label for="">First Name:</label>
        <div>{{this.firstName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadPerson',
  created () {
    console.log('test', this.$route.params.id)
    console.log('test2', this.allPersons)
    this.id = this.$route.params.id
    // console.log('id', this.id || null)
  }
}
</script>
