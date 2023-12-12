export function imageToBase64(params) {
  const reader = new FileReader();
  reader.readAsDataURL(params);

  const data = new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });

  return data;
}
