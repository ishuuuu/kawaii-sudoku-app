// 数独ボードを検証するユーティリティ関数

/**
 * 数独ボードが完成しているかを検証する
 * @param {Array} board - 9x9の数独ボード
 * @returns {boolean} ボードが有効で完成しているか
 */
export const validateBoard = (board) => {
  // 空のセルがないか確認
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return false;
      }
    }
  }
  
  // 各行を検証
  for (let row = 0; row < 9; row++) {
    if (!isValidGroup(board[row])) {
      return false;
    }
  }
  
  // 各列を検証
  for (let col = 0; col < 9; col++) {
    const column = [];
    for (let row = 0; row < 9; row++) {
      column.push(board[row][col]);
    }
    if (!isValidGroup(column)) {
      return false;
    }
  }
  
  // 各3x3ボックスを検証
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const box = [];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          box.push(board[boxRow * 3 + r][boxCol * 3 + c]);
        }
      }
      if (!isValidGroup(box)) {
        return false;
      }
    }
  }
  
  return true;
};

/**
 * 指定されたグループ（行、列、ボックス）が有効か検証する
 * @param {Array} group - 検証するグループ
 * @returns {boolean} グループが有効かどうか
 */
const isValidGroup = (group) => {
  const seen = new Set();
  
  for (const num of group) {
    // 0（空白）は無効
    if (num === 0) {
      return false;
    }
    
    // 数字が範囲外
    if (num < 1 || num > 9) {
      return false;
    }
    
    // 重複チェック
    if (seen.has(num)) {
      return false;
    }
    
    seen.add(num);
  }
  
  return seen.size === 9;
};