<template>
  <div class="main-container">
    <div class="layout-section">
      <layout-sidetools></layout-sidetools>
      <layout-workarea>
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </layout-workarea>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hope'
  }
</script>