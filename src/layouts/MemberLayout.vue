<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toAllMemberList = () => {
  router.push('/all')
}

const toSerchMember = () => {
  router.push('/serch')
}

const toSaveMember = () => {
  router.push('/save')
}
</script>

<template>
  <q-btn label="전체유저" color="black" @click="toAllMemberList" />
  <q-btn label="유저검색" color="black" @click="toSerchMember" />
  <q-btn label="유저추가" color="black" @click="toSaveMember" />
  <q-btn label="정보수정" color="black" />
  <q-btn label="유저삭제" color="black" />
  <div><router-view /></div>
</template>

<style lang="scss" scoped></style>
