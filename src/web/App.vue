<template>
  <div class="main-container">
    <div class="layout-section">
      <layout-controls></layout-controls>
      <layout-container>
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </layout-container>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hope'
  }
</script>