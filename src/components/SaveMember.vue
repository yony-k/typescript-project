<script setup lang="ts">
import { ref } from 'vue'
import type { RegistMemberDto } from 'src/apis/PostAPI'
import { useSaveMember } from 'src/apis/PostAPI'

const registMemberDto = ref<RegistMemberDto>({
  name: '',
  age: 0,
  email: '',
  phone: '',
})

const useSave = useSaveMember()

const saveMember = async () => {
  await useSave.fetchSaveMember(registMemberDto.value)
  alert(useSave.saveMemberMessage.value)
}
</script>

<template>
  <div style="max-width: 500px">
    <q-input v-model="registMemberDto.name" filled type="text" hint="Name" />
    <q-input v-model="registMemberDto.age" filled type="number" hint="Age" />
    <q-input v-model="registMemberDto.email" filled type="email" hint="Email" />
    <q-input v-model="registMemberDto.phone" filled type="tel" hint="Telephone number" />
  </div>
  <div style="margin-top: 20px">
    <q-btn color="black" label="추가" @click="saveMember" />
  </div>
</template>

<style lang="scss" scoped></style>
