<script setup lang="ts">
import { ref } from 'vue'

// 유저 추가 모달 버튼
const medium = ref<boolean>(false)
</script>

<template>
  <q-dialog v-model="medium">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">유저 추가</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="취소" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
