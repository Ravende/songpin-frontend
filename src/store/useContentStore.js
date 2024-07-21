import create from 'zustand';

const useLoginModalStore = create((set) => ({
  loginModal: false,
  setLoginModal: (newState) => set({ loginModal: newState }),
}));

export default useLoginModalStore;
