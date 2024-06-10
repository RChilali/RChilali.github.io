<script setup>
</script>

<template>
  <div class="greetings">
    <h1>{{$t('welcomeMsg') }}</h1>
    <h2>{{$t('name') }} {{$t('surname') }}</h2>
    <p>{{$t('intro')}}</p>

    <div id="contact">
      <h3>contact</h3>
        <p>{{$t('email')}}</p>
        <p>{{$t('phone')}}</p>
      <p>{{$t('github')}}</p>
      <p>{{$t('linkedin')}}</p>


    </div>

  </div>
</template>

<style scoped>


</style>
