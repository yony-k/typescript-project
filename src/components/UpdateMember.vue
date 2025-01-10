<script setup lang="ts">
import type { PropType } from 'vue'
import { ref, onMounted } from 'vue'
import type { MemberDto } from 'src/apis/PostAPI'

const props = defineProps({
  member: {
    type: Object as PropType<MemberDto>,
    required: true,
  },
})

const memberDto = ref<MemberDto>({} as MemberDto)

onMounted(() => {
  memberDto.value = { ...props.member }
})
</script>

<template>
  <div style="max-width: 500px">
    <q-input v-model="memberDto.name" filled type="text" hint="Name" readonly />
    <q-input v-model="memberDto.age" filled type="number" hint="Age" readonly />
    <q-input v-model="memberDto.email" filled type="email" hint="Email" />
    <q-input v-model="memberDto.phone" filled type="tel" hint="Telephone number" />
  </div>
  <div style="margin-top: 20px">
    <q-btn color="black" label="수정" />
  </div>
</template>

<style lang="scss" scoped></style>
