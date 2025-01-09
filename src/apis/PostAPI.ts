import { ref } from 'vue'

export interface MemberDto {
  id: number
  name: string
  age: number
  email: string
  phone: string
}

export interface RegistMemberDto {
  name: string
  age: number
  email: string
  phone: string
}

export interface UpdateMemberDto {
  id: number
  email: string
  phone: string
}

const MEMBER_PATH = '/api/member'

// 전체 유저 조회
export const useGetMemberList = () => {
  let memberList: MemberDto[] = []

  const fetchGetMemberList = async () => {
    memberList = await fetch(MEMBER_PATH)
      .then((response) => {
        return response.json()
      })
      .catch((error) => console.log('Error: ', error))
  }

  const getMemberList = () => {
    return memberList
  }

  return { fetchGetMemberList, getMemberList }
}

// 특정 유저 조회
export const useGetMember = () => {
  let memberDto: MemberDto | null = null

  const fetchGetMember = async (id: number) => {
    memberDto = await fetch(`${MEMBER_PATH}/${id}`)
      .then((response) => response.json())
      .catch((error) => console.log('Error: ', error))
  }

  const getMember = () => {
    return memberDto
  }

  return { fetchGetMember, getMember }
}

type Nullable<T> = T | null

// 유저 추가
export const useSaveMember = () => {
  const saveMemberMessage = ref<Nullable<string>>(null)

  const fetchSaveMember = async (registMemberDto: RegistMemberDto) => {
    await fetch(MEMBER_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registMemberDto),
    })
      .then((response) => response.text())
      .then((message) => {
        saveMemberMessage.value = message
      })
      .catch((error) => {
        console.log('Error: ', error)
        saveMemberMessage.value = '서버 통신 중 오류가 발생했습니다.'
      })
  }

  return { fetchSaveMember, saveMemberMessage }
}

// 유저 정보 수정
export const useUpdateMember = () => {
  const updateMemberMessage = ref<Nullable<string>>(null)

  const fetchUpdateMember = async (updateMemberDto: UpdateMemberDto) => {
    await fetch(MEMBER_PATH, {
      method: 'PUT', // PUT 요청
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateMemberDto),
    })
      .then((response) => response.text())
      .then((message) => {
        updateMemberMessage.value = message
      })
      .catch((error) => {
        console.log('Error: ', error)
        updateMemberMessage.value = '서버 통신 중 오류가 발생했습니다.'
      })
  }

  return { fetchUpdateMember, updateMemberMessage }
}

export const useDeleteMember = () => {
  const deleteMemberMessage = ref<Nullable<string>>(null)

  const fetchDeleteMember = async (id: number) => {
    await fetch(`${MEMBER_PATH}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((message) => {
        deleteMemberMessage.value = message
      })
      .catch((error) => {
        console.log('Error: ', error)
        deleteMemberMessage.value = '서버 통신 중 오류가 발생했습니다.'
      })
  }

  return { fetchDeleteMember, deleteMemberMessage }
}
