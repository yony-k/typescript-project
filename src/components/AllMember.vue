<script setup lang="ts">
import type { MemberDto } from 'src/apis/PostAPI'
import { useGetMemberList } from 'src/apis/PostAPI'
import { ref, onMounted } from 'vue'
import MemberComponent from 'src/components/MemberComponent.vue'

// 전체 유저 조회 메서드
const fetchMemberList = useGetMemberList()

// 유저 목록
const memberList = ref<MemberDto[]>([])

// 전체 유저 조회 이벤트
const fetchAndSetMemberList = () => {
  fetchMemberList.fetchGetMemberList().then(() => {
    memberList.value = fetchMemberList.getMemberList()
    console.log('getMemberList 결과:', memberList.value)
  })
}

onMounted(() => {
  fetchAndSetMemberList()
})
</script>

<template>
  <div v-if="Array.isArray(memberList)">
    <div v-for="(m, i) in memberList" :key="i">
      <MemberComponent :member="m" />
    </div>
  </div>
  <div v-else>
    <p>등록된 유저가 없습니다.</p>
  </div>
</template>

<style lang="scss" scoped></style>
