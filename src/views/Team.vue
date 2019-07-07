<template>
  <div id="team">
      <div class="team lists">
        <div>
        </div>
        <div>
            <TeamList />
        </div>
        
      </div>
  </div>
</template>

<script>

import TeamList from "../components/TeamList"

export default {
  name: 'Team',
  components: {
      TeamList
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed() {

  }
}
</script>

<style>

</style>
