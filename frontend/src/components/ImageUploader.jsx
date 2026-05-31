import { useState } from "react";
import API from "../services/api";

export default function ImageUploader() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const upload = async () => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await API.post(
      "/predict",
      formData
    );

    setResult(response.data);
  };

  return (
    <>
      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button onClick={upload}>
        Analyze
      </button>

      {result && (
        <pre>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </>
  );
}
