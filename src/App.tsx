import React from 'react';

import { useAtom } from 'jotai';

import PopModal from '@organisms/PopModal';
import Home from '@pages/Home';
import { modalStore } from '@store/modalStore';

function App() {
  const [isModalOpen, setIsModalOpen] = useAtom(modalStore);
  return (
    <>
      <PopModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Home />
    </>
  );
}

export default App;
