
export async function uploadImageToS3(file: File) {
    const formData = new FormData();
    formData.append("file", file);
  
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  
    if (!res.ok) throw new Error("Failed to upload image");
  
    const data = await res.json();
    return data.url; // This is the S3 URL
  }
  