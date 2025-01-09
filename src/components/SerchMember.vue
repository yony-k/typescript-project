<script setup lang="ts">
import type { MemberDto } from 'src/apis/PostAPI'
import { useGetMember } from 'src/apis/PostAPI'
import { ref } from 'vue'

// 유저 아이디 검색 창
const serchKeyword = ref<number | null>(null)

// 유저 객체
const member = ref<MemberDto | null>(null)

// 특정 유저 검색 메서드
const fetchMember = useGetMember()

// 특정 유저 조회 이벤트
const fetchAndSetMember = () => {
  if (serchKeyword.value === null) {
    alert('아이디를 입력해주세요')
    return
  }
  fetchMember.fetchGetMember(serchKeyword.value).then(() => {
    member.value = fetchMember.getMember()
    console.log('getMember 결과:', member.value)
  })
}
</script>

<template>
  <q-input v-model="serchKeyword" label="Standard" />
  <q-btn label="검색" color="black" @click="fetchAndSetMember()" />

  <div v-if="member !== null">
    <div>{{ member.id }}</div>
    <div>{{ member.name }}</div>
    <div>{{ member.age }}</div>
    <div>{{ member.email }}</div>
    <div>{{ member.phone }}</div>
  </div>
  <div v-else>
    <p>유저 정보를 찾을 수 없습니다.</p>
  </div>
</template>

<style lang="scss" scoped></style>
