import React, { useState } from 'react';

const FileUpload = ({ accept, multiple, onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length) {
      const newFiles = Array.from(files);

      // Generate preview for each new file
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));

      setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
      setPreviewImages(prevImages => [...prevImages, ...newPreviews]);
    }
  };

  const handleDelete = (indexToDelete) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToDelete));
    setPreviewImages(prevImages => prevImages.filter((_, index) => index !== indexToDelete));
  };

  const handleUpload = () => {
    if (onUpload && selectedFiles.length > 0) {
      onUpload(selectedFiles);
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileInput}
        className="mb-2"
      />
      <div className="flex flex-wrap">
        {previewImages.map((imageSrc, index) => (
          <div key={index} className="w-24 h-24 mr-2 mb-2 relative">
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
            >X</button>
            <img
              src={imageSrc}
              alt={`Preview ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleUpload}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
