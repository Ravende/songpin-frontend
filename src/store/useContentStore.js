import create from 'zustand';

const useContentStore = create((set) => ({
  content: true,
  setContent: (newContent) => set(() => ({ content: newContent })),
}));

export default useContentStore;
