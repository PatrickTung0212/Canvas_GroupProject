function rgbToHex(rgb) {
    // 使用正則表達式從 rgb 字符串中提取數字
    const matches = rgb.match(/\d+/g);
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid RGB value');
    }
  
    // 將提取的數字轉換為十六進制
    const hexValues = matches.map((value) => {
      const hex = parseInt(value).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    });
  
    // 將十六進制值組合為 "#rrggbb" 格式
    return '#' + hexValues.join('');
  }
  
//   // 測試代碼
//   const rgbValue = 'rgb(0, 0, 0)';
//   const hexValue = rgbToHex(rgbValue);
//   console.log(hexValue); // 輸出 "#000000"