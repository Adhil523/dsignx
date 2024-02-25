import React,{useState} from 'react'

const Fileupload = () => {
  const [documentFile, setDocumentFile] = useState(null);

  const uploadDocument = async () => {
      if (!documentFile) {
          alert("Please select a PDF document to upload.");
          return;
      }

      const formData = new FormData();
      formData.append("document", documentFile);

      try {
          const response = await fetch("http://localhost:3000/upload", {
              method: "POST",
              body: formData,
          });

          if (response.ok) {
              const result = await response.json();
              const documentId = result.documentId;

              alert(`Document uploaded successfully! Document ID: ${documentId}`);
          } else {
              alert("Failed to upload the document. Please try again.");
          }
      } catch (error) {
          console.error(error);
          alert("An error occurred while uploading the document.");
      }
  }

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      setDocumentFile(file);
  }
  return (
    <div className='mt-12 ml-12'>
       <input type="file" onChange={handleFileChange}/>
      <button onclick={uploadDocument} className='bg-green-600 w-[250px] h-[50px] rounded-md text-white font-bold'>Post</button>
    </div>
  )
}

export default Fileupload
