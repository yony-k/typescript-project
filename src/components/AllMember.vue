<script setup lang="ts">
import type { MemberDto } from 'src/apis/PostAPI'
import { useGetMemberList } from 'src/apis/PostAPI'
import { ref, onMounted } from 'vue'

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
  <Modal>
    <template #content>
      <div>
        <div v-for="(m, i) in memberList" :key="i">
          <div>{{ m.id }}</div>
          <div>{{ m.name }}</div>
          <div>{{ m.age }}</div>
          <div>{{ m.email }}</div>
          <div>{{ m.phone }}</div>
          <div style="margin-top: 20px">
            <q-btn color="black" label="수정" @click="saveMember" />
          </div>
        </div>
      </div>
    </template>
    <template #error>
      <p>등록된 유저가 없습니다.</p>
    </template>
  </Modal>
</template>

<style lang="scss" scoped></style>
