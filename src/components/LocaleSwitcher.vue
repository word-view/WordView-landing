<script>
export default {
  name: 'LocaleSwitcher',
  props: {}
}
</script>

<template>
  <div class="locale-switcher">
    <div class="locale-changer">
      <select v-model="$i18n.locale" class="locale-picker"  style="padding: 5px 15px;font-size: 16px;">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
    .locale-picker {
        border: none;
        border-radius: 20px;
        background-color: #CFC2DA;
        color: #3C255A;
        font-family: 'Noto Sans', sans-serif;
    }
</style>