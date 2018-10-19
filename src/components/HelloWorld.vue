<template>
  <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">
  </mt-datetime-picker>
</template>

<script>
export default {
  data() {
    return {
      pickerValue: ""
    };
  },
  mounted(){
    this.$refs.picker.open();
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    }
  }
};
</script>