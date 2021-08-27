<template>
  <router-link :to="to" class="link">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!$store.getters.collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    icon: String,
  },
  computed: {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  user-select: none;
  margin: 1em 0;
  padding: 0.1em;
  border-radius: 0.25em;
  height: 1.5em;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
  font-weight: 100px;
  font-size: 25px;
}
</style>