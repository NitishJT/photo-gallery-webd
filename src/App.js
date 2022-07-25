import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Upper from './comps/Upper';
import Middle from './comps/Middle';
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <Upper></Upper>
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
    <Middle></Middle>
    </div>
  );
}

export default App;
