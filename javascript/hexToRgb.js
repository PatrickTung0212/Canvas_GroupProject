function hexToRgb(hex) {
    // 將十六進制值轉換為 RGB 值
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    // 返回 RGB 格式的字符串
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // 測試代碼
//   const hexValue = '#000000';
//   const rgbValue = hexToRgb(hexValue);
//   console.log(rgbValue); // 輸出 "rgb(0, 0, 0)"