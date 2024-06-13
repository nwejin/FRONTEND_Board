import { create } from 'zustand';

interface BoardStore {
  subject: string;
  group: string;
  team: string;
  title: string;
  content: string;
  liked: boolean;
  setSubject: (value: string) => void;
  setGroup: (value: string) => void;
  setTeam: (value: string) => void;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
  setLiked: (value: boolean) => void;

  // 필터
  filter: string;
  setFilter: (value: string) => void;

  // 보기
  view: boolean;
  setView: (value: boolean) => void;

  // 정렬
  sort: boolean;
  setSort: (value: boolean) => void;

  // 검색
  search: string;
  setSearch: (value: string) => void;
}

const useBoardStore = create<BoardStore>((set) => ({
  // 초기값
  subject: '',
  group: 'A조',
  team: '독일',
  title: '',
  content: '',
  filter: '',
  view: true,
  sort: true,
  search: '',
  liked: true,

  // 저장
  setSubject: (value: string) => set({ subject: value }),
  setGroup: (value: string) => set({ group: value }),
  setTeam: (value: string) => set({ team: value }),
  setTitle: (value: string) => set({ title: value }),
  setContent: (value: string) => set({ content: value }),
  setFilter: (value: string) => set({ filter: value }),
  setView: (value: boolean) => set({ view: value }),
  setSort: (value: boolean) => set({ sort: value }),
  setSearch: (value: string) => set({ search: value }),
  setLiked: (value: boolean) => set({ liked: value }),
}));

export default useBoardStore;
