export const convertToBase64 = (
  file: File,
  callback: (base64: string) => void,
) => {
  const reader = new FileReader();

  reader.onloadend = () => {
    const result = reader.result?.toString() || '';
    callback(result);
  };

  reader.readAsDataURL(file);
};
