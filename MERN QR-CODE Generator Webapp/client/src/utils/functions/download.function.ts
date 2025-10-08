import { formateData } from './date.function';

const svgPreparation = (svg: string) => {
  const svgElement = document.querySelector(svg) as HTMLDivElement;
  svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const svgData = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgData], {
    type: 'image/svg+xml;charset=utf-8',
  });

  return URL.createObjectURL(svgBlob);
};

const downloadImage = (type: string, name: string) => {
  const downloadLink = document.createElement('a');
  downloadLink.href = type;
  downloadLink.download = name;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const downloadSvg = (
  element: string,
  fileName = `QRCODE-${formateData()}`,
  type = 'image/jpg',
  size = 512,
) => {
  const svgURL = svgPreparation(element);

  const image = new Image();

  image.onload = () => {
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d');
    context?.drawImage(image, 0, 0, size, size);

    const imageType = canvas.toDataURL(type);

    downloadImage(imageType, fileName);
  };

  image.src = svgURL;
};
