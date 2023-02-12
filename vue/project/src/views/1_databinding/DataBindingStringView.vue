<template>
    <div>
        <h1>Hello {{ userName }} user!</h1>
        <p>Today Message : {{ message }}</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userName: 'John Doe',
      message: 'Hello World!',
      arr: [],
      obj: {}
    }
  }
}
</script>
