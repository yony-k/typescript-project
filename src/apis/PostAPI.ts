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
        if (!response.ok) {
          return response.text().then((message) => {
            throw new Error(message)
          })
        } else {
          return response.json()
        }
      })
      .catch((error) => {
        alert(error)
      })
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
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            throw new Error(message)
          })
        } else {
          return response.json()
        }
      })
      .catch((error) => {
        alert(error)
      })
  }

  const getMember = () => {
    return memberDto
  }

  return { fetchGetMember, getMember }
}

// 유저 추가
export const useSaveMember = () => {
  const saveMemberMessage = ref<string>('')

  const fetchSaveMember = async (registMemberDto: RegistMemberDto) => {
    await fetch(MEMBER_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registMemberDto),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            throw new Error(message)
          })
        } else {
          return response.text().then((message) => {
            saveMemberMessage.value = message
          })
        }
      })
      .catch((error) => {
        alert(error)
      })
  }
  return { fetchSaveMember, saveMemberMessage }
}

// 유저 정보 수정
export const useUpdateMember = () => {
  const updateMemberMessage = ref<string>('')

  const fetchUpdateMember = async (updateMemberDto: UpdateMemberDto) => {
    await fetch(MEMBER_PATH, {
      method: 'PUT', // PUT 요청
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateMemberDto),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            throw new Error(message)
          })
        } else {
          return response.text()
        }
      })
      .then((message) => {
        updateMemberMessage.value = message
      })
      .catch((error) => {
        alert(error)
      })
  }

  return { fetchUpdateMember, updateMemberMessage }
}

// 유저 삭제
export const useDeleteMember = () => {
  const deleteMemberMessage = ref<string>('')

  const fetchDeleteMember = async (id: number) => {
    await fetch(`${MEMBER_PATH}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            throw new Error(message)
          })
        } else {
          return response.text()
        }
      })
      .then((message) => {
        deleteMemberMessage.value = message
      })
      .catch((error) => {
        alert(error)
      })
  }

  return { fetchDeleteMember, deleteMemberMessage }
}
