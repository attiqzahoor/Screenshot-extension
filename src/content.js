import html2canvas from 'html2canvas';

(async function() {
  try {
    const canvas = await html2canvas(document.body);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'screenshot.png';
    link.click();
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  }
})();
