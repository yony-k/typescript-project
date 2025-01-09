<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toAllMemberList = () => {
  router.push('/all')
}

const toSerchMemberList = () => {
  router.push('/serch')
}
</script>

<template>
  <q-btn label="전체유저" color="black" @click="toAllMemberList" />
  <q-btn label="유저검색" color="black" @click="toSerchMemberList" />
  <q-btn label="유저추가" color="black" />
  <q-btn label="정보수정" color="black" />
  <q-btn label="유저삭제" color="black" />
  <div><router-view /></div>
</template>

<style lang="scss" scoped></style>
