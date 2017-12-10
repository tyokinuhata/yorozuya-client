<template>
  <div>{{shopName}}</div>
</template>

<script>
  export default {
    data: function() {
      return {
        shopName: localStorage.getItem('shopName')
      }
    }
  }
</script>