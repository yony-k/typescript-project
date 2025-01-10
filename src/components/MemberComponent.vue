<script setup lang="ts">
import { ref, watch } from 'vue'
import type { MemberDto } from 'src/apis/PostAPI'

const props = defineProps<{
  member: MemberDto
}>()

const memberDto = ref<MemberDto>({
  id: 0,
  name: '',
  age: 0,
  email: '',
  phone: '',
})

watch(
  () => props.member,
  (newMemberDto: MemberDto) => {
    memberDto.value = { ...newMemberDto }
  },
  { immediate: true },
)
</script>

<template>
  <div>{{ memberDto.id }}</div>
  <div>{{ memberDto.name }}</div>
  <div>{{ memberDto.age }}</div>
  <div>{{ memberDto.email }}</div>
  <div>{{ memberDto.phone }}</div>
</template>

<style lang="scss" scoped></style>
